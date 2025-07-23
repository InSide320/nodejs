// route factory pattern

const express = require('express');
const router = express.Router();
const {articleSchema} = require("../models");

module.exports = function () {
    router.get('/', async (req, res) => {
        const articles = await articleSchema.find({});
        res.render('main', {articles});
    });
    router.post('/', async (req, res) => {
        const {comment, visible, articleId} = req.body;
        if (!comment) {
            return res.status(400).send('Comment cannot be empty');
        }
        const newComment = {
            text: comment,
            visible: visible === "visible",
        }
        await articleSchema.updateOne({_id: articleId}, {$push: {comments: newComment}}); // !!!!!!!!
        res.redirect('/');
    })
    return router;
};
