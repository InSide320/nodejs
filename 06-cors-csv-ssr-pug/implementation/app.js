const path = require('path');
const config = require('config');
const port = config.get('port');
const fs = require('fs/promises');
const express = require('express');
const {readMessages} = require('./utility/index.js');

const app = express();
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('main');
})

app.get('/form', (req, res) => {
    res.render('form');
})

app.post('/form', async (req, res) => {
    const {username, message} = req.body;
    console.log(`Name: ${username}, Message: ${message}`);
    const messageWithTime = message + ` - ${new Date().toISOString()}`;
    const filePath = path.join(__dirname, 'message.json');
    try {
        const messages = await readMessages(filePath);
        messages.push({username, message: messageWithTime});
        await fs.writeFile(filePath, JSON.stringify(messages, null, 2), 'utf-8');
        console.log(`Message saved: ${username} - ${messageWithTime}`);
        res.redirect('/guests');
    } catch (error) {
        console.error('Error reading or writing file:', error);
        return res.status(500).send('Internal Server Error');

    }
    res.redirect('/guests');
})

app.get('/guests', async (req, res) => {
    try {
        const messageFile = path.join(__dirname, 'message.json');
        let messages = await readMessages(messageFile);
        res.render('guests', {guests: messages});
    } catch (error) {
        console.error('Error reading or parsing file' + error);
        res.render('guests', {guests: []});
    }
})
