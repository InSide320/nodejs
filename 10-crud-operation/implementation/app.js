const config = require('config');

const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const sessionMiddleware = require('./db/session');

const { connectDB } = require('./db/db');

const app = express();

// Setups
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static(`${__dirname}/assets`));
app.use(bodyParser.urlencoded({ extended: false }));


app.use(sessionMiddleware);

app.use(morgan('tiny', {
  skip: req => req.url.startsWith('/.well-known')
}));

app.use((req, res, next) => {
  app.locals.user = req.session?.user || null;
  app.locals.email = req.session?.email || null;
  next();
});

connectDB().then(({ usersCollection, articlesCollection }) => {
  // pseudo  Immediately Invoked Function Expression (IIFE)
  app.use('/', require('./routes/index')({ articlesCollection }));
  app.use('/', require('./routes/auth')({ usersCollection }));
  app.use('/', require('./routes/dashboard')({ usersCollection }));
  app.use('/articles', require('./routes/articles')({ articlesCollection}));

  app.listen(config.port, () => {
    console.log('Сервер запущено на http://localhost:' + config.port);
  });
});
