const express = require('express');
const router = express.Router();
const userSchema = require('../models/userSchema');

module.exports = function () {
    router.get('/', async (req, res) => {
        if (!req.session.user) return res.redirect('/auth/login');
        const users = await userSchema.find({role: 'user'});
        res.render('dashboard', {users});
    });

    return router;
}