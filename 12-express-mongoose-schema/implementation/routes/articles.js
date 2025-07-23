const express = require('express');
const articleSchema = require('../models/articleSchema');

module.exports = () => {
    const router = express.Router();

    // read
    router.get('/', async (req, res) => {
        const articles = await articleSchema.find({});
        res.render('articles', {articles});
    });

    // CREATE
    router.get('/new', (req, res) => {
        res.render('article-form', {article: {}, action: '/articles/new'});
    });

    // CREATE
    router.post('/new', async (req, res) => {
        const {title, content, url, published} = req.body;
        const article = {
            title,
            content,
            url,
            published: published === 'on',
            createdAt: new Date()
        };
        await articleSchema.insertOne(article);
        res.redirect('/articles');
    });

    //  READ
    router.get('/:url', async (req, res) => {
        const article = await articleSchema.findOne({url: req.params.url});
        res.render('article', {article});
    });

    // 🟡 UPDATE — форма
    router.get('/:url/edit', async (req, res) => {
        const article = await articleSchema.findOne({url: req.params.url});
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

        await articleSchema.updateOne(
            {url: req.params.url},
            {
                $set: article
            }
        );
        res.redirect('/articles');
    });

    // DELETE
    router.delete('/:url', async (req, res) => {
        await articleSchema.deleteOne({url: req.params.url});
        res.redirect('/articles');
    });

    return router;
};