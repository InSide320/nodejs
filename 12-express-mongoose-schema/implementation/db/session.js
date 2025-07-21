const config = require('config');
const session = require('express-session');
const MongoStore = require('connect-mongo');

function sessionMiddleware() {
    return session({
        store: MongoStore.create({
            mongoUrl: config.get('mongoUrl'),
            collectionName: config.get('dbSessionCollectionName'),
            ttl: 60 * 60,
        }),
        secret: config.get('session_key'),
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 3600000,
        },
    });
}

module.exports = sessionMiddleware;
