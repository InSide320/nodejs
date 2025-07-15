const express = require('express');
const router = express.Router();

module.exports = function ({ usersCollection }) {


  router.get('/dashboard', async (req, res) => {
    if (!req.session.user) return res.redirect('/login');

    try {
      const users = await usersCollection.find({ role: 'user' }).toArray();
      res.render('dashboard', { users });
    } catch (err) {
      res.status(500).send('Помилка сервера');
    }
  });

  return router;
}