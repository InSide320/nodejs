const config = require('config');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const { mongoUrl } = require('./db');

module.exports = session({
  store: MongoStore.create({
    mongoUrl,
    collectionName: config.dbSessionCollectionName,
    ttl: 60 * 60,
  }),
  secret: config.session_key, // желательно хранить в .env
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 3600000, // 1 час
  },
});
