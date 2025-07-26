const config = require('config');
const express = require('express');
const morgan = require('morgan');
const connectDB = require('./db/db');
const i18n = require('i18n');
const path = require('path');

const app = express();

i18n.configure({
  locales: config.supportedLangs,               
  directory: path.join(__dirname, 'locales'),
  defaultLocale: config.defaultLocale,
  queryParameter: 'lang',                      
  cookie: 'lang',                              
  autoReload: true,
  updateFiles: false,                         
  syncFiles: false
});

app.use(i18n.init);

// Setups
app.set('view engine', 'pug');
app.use(express.static(`${__dirname}/assets`));

app.use(morgan('tiny', {
  skip: req => req.url.startsWith('/.well-known')
}));

app.use("/", require('./utils/setLang'));

const mainRouter = require('./routes/main');
const pageRouter = require('./routes/page');

connectDB().then(() => {
  app.use('/:lang', mainRouter);
  app.use('/:lang/page', pageRouter);

  app.listen(config.port, () => {
    console.log('Сервер запущено на http://localhost:' + config.port);
  });
});
