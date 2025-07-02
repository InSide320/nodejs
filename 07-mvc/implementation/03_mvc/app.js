const path = require('path');

const express = require('express');
const app = express();

const messageRoutes = require('./routes/messageRoutes');

const PORT = 3000;
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));


app.use("/", messageRoutes);

app.listen(PORT, ()=> console.log('work'));