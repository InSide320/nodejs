const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const createSessionMiddleware = require("./db/session");

const app = express();

// Setups
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static(`${__dirname}/assets`));
app.use(bodyParser.urlencoded({extended: false}));

app.use(createSessionMiddleware());

app.use(morgan('tiny', {
    skip: req => req.url.startsWith('/.well-known')
}));
app.use(methodOverride('_method'));

app.use((req, res, next) => {
    res.locals.user = req.session?.user || null;
    res.locals.email = req.session?.email || null;
    next();
});

module.exports = app;
