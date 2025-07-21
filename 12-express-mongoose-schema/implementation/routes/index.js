// route factory pattern

const express = require('express');
const router = express.Router();

module.exports = function ({articleSchema}) {
    router.get('/', async (req, res) => {
        const articles = await articleSchema.find({});
        res.render('main', {articles});
    });
    return router;
};
