const express = require('express');
const router = express.Router();

module.exports = function ({userSchema}) {
    router.get('/dashboard', async (req, res) => {
        if (!req.session.user) return res.redirect('/login');
        const users = await userSchema.find({role: 'user'});
        res.render('dashboard', {users});
    });

    return router;
}