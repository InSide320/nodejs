const express = require('express');
const router = express.Router();

module.exports = function ({articleSchema}) {
    router.post('/', async (req, res) => {
        const {comment, visible, articleId} = req.body;
        if (!comment) {
            return res.status(400).send('Comment cannot be empty');
        }
        const newComment = {
            text: comment,
            visible: visible === "visible",
        }
        await articleSchema.updateOne({_id: articleId}, {$push: {comments: newComment}});
        res.redirect('/');
    })
    return router;
};
