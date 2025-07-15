const express = require('express');

module.exports = function ({ articlesCollection }) {
  const router = express.Router();

  // read
  router.get('/', async (req, res) => {
    const articles = await articlesCollection.find().toArray();
    res.render('articles', { articles });
  });

  // CREATE
  router.get('/new', (req, res) => {
    res.render('article-form', { article: {}, action: '/articles/new' });
  });

  // CREATE 
  router.post('/new', async (req, res) => {
    const { title, content, url, published } = req.body;
    await articlesCollection.insertOne({
      title,
      content,
      url,
      published: published === 'on',
      createdAt: new Date()
    });
    res.redirect('/articles');
  });



  //  READ 
  router.get('/:url', async (req, res) => {
    const article = await articlesCollection.findOne({ url: req.params.url});
    res.render('article', { article });
  });

  // 🟡 UPDATE — форма
  router.get('/:url/edit', async (req, res) => {
    const article = await articlesCollection.findOne({url: req.params.url});
    res.render('article-form', { article, action: `/articles/${article.url}/edit` });
  });

  // 🟡 UPDATE
  router.post('/:url/edit', async (req, res) => {
    const { title, content, url, published } = req.body;
    await articlesCollection.updateOne(
      { url: req.params.url },
      {
        $set: {
          title,
          content,
          url,
          published: published === 'on',
          updatedAt: new Date()
        }
      }
    );
    res.redirect('/articles');
  });

  // DELETE
  router.post('/:url/delete', async (req, res) => {
    await articlesCollection.deleteOne({url: req.params.url });
    res.redirect('/articles');
  });

  return router;
};