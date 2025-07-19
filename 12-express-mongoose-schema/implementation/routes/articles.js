const express = require('express');
const {parseTags} = require("../utils/tags");

module.exports = function ({articlesCollection}) {
    const router = express.Router();

    // read
    router.get('/', async (req, res) => {
        const articles = await articlesCollection.find().toArray();
        res.render('articles', {articles});
    });

    // CREATE
    router.get('/new', (req, res) => {
        res.render('article-form', {article: {}, action: '/articles/new'});
    });

    // CREATE
    router.post('/new', async (req, res) => {
        const {title, content, url, tags, published} = req.body;
        const article = {
            title,
            content,
            url,
            published: published === 'on',
            createdAt: new Date()
        };
        if (tags) article.tags = parseTags(tags);

        await articlesCollection.insertOne(article);
        res.redirect('/articles');
    });


    //  READ
    router.get('/:url', async (req, res) => {
        const article = await articlesCollection.findOne({url: req.params.url});
        res.render('article', {article});
    });

    // 🟡 UPDATE — форма
    router.get('/:url/edit', async (req, res) => {
        const article = await articlesCollection.findOne({url: req.params.url});
        res.render('article-form', {article, action: `/articles/${article.url}?_method=PUT`});
    });

    // 🟡 UPDATE
    router.put('/:url', async (req, res) => {
        const {title, content, url, tags, published} = req.body;
        const article = {
            title,
            content,
            url,
            published: published === 'on',
            updatedAt: new Date()
        };
        if (tags) article.tags = parseTags(tags);

        await articlesCollection.updateOne(
            {url: req.params.url},
            {
                $set: article
            }
        );
        res.redirect('/articles');
    });

    // DELETE
    router.delete('/:url', async (req, res) => {
        await articlesCollection.deleteOne({url: req.params.url});
        res.redirect('/articles');
    });

    return router;
};