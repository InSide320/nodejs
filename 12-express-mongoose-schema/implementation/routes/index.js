// route factory pattern

const express = require('express');
const router = express.Router();

module.exports = function ({ articlesCollection }) {

  router.get('/', async (req, res) => {
    const articles = await articlesCollection.find({ published: true }).toArray();
    res.render('main', { articles });
  });

  router.get('/article/:url', async (req, res) => {
    const article = await articlesCollection.findOne({ url: req.params.url });
    res.render('article', { article });
  });

  return router;
};
