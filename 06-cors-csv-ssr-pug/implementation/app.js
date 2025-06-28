const path = require('path');
const config = require('config');
const port = config.get('port');
const fs = require('fs');

const express = require('express');
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

app.post('/form', (req, res) => {
    const {username, message} = req.body;
    console.log(`Name: ${username}, Message: ${message}`);
    const messageWithTime = message + ` - ${new Date().toISOString()}`;
    const filePath = path.join(__dirname, 'message.json');
    fs.readFile(filePath, "utf-8", (err, data) => {
        let messages = [];
        if (!err && data) {
            try {
                messages = JSON.parse(data);
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
            }
        }
        messages.push({username: username, message: messageWithTime});
        fs.writeFile(filePath, JSON.stringify(messages, null, 2), (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return res.status(500).send('Internal Server Error');
            }
            console.log('Message saved successfully');
        })
    })
    res.redirect('/guests');
})

app.get('/guests', (req, res) => {
    fs.readFile(path.join(__dirname, 'message.json'), "utf-8", (err, data) => {
        let messages = [];
        if (!err && data) {
            try {
                messages = JSON.parse(data);
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
            }
        }
        res.render('guests', {guests: messages});
    })
})