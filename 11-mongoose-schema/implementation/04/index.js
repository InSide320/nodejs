const mongoose = require('mongoose');
const Element = require('./element');

const mongoURL = 'mongodb://localhost:27017/storage'; // Поставьте той порт що у вас

const document = require ('./document');
console.log(document)

async function connectDB() {
  try {
    await mongoose.connect(mongoURL);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Connection error', err);
    process.exit(1);
  }
}

async function run() {
  await connectDB();

  try {
    const model = new Element(document);
    await model.save();
    console.log(model);
  } catch (err) {
    console.error('Save error:', err);
  } finally {
    mongoose.disconnect(); // закрываем подключение, если скрипт одноразовый
  }
}

run();
