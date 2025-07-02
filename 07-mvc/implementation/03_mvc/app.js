const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

const messageRoutes = require('./routes/messageRoutes');
const errorRoutes = require('./routes/errorRoutes');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan("tiny"))

app.use("/", messageRoutes);

app.use(errorRoutes);

module.exports = app;
