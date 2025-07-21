const config = require('config');
const mongoose = require('mongoose');
const mongoUrl = config.get('mongoUrl');

async function connectDB() {
    try {
        const connection = await mongoose.connect(mongoUrl);
        console.log('Mongoose підключено успішно');
        return connection;
    } catch (err) {
        console.error('Connection error', err);
        process.exit(1);
    }
}

module.exports = {connectDB};
