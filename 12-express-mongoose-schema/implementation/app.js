const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const {stringifyTags} = require("./utils/tags");
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
    app.locals.user = req.session?.user || null;
    app.locals.email = req.session?.email || null;
    res.locals.stringifyTags = stringifyTags;
    next();
});

module.exports = app;
