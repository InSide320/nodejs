const Message = require('../models/messageModel');

exports.home = (req, res) => {
    res.render('index');
}

exports.showForm = (req, res) => {
    res.render('form');
}

exports.submitForm = async (req, res) => {
    const {username, text} = req.body;
    if (username && text) {
        try {
            const message = await Message.add(username, text);
            console.log(`Message saved: ${message.username} - ${message.text}`);
            res.redirect('/messages');
        } catch (error) {
            console.error('Error adding message:', error);
            return res.status(500).send('Internal Server Error');
        }
    } else {
        res.redirect('/form');
    }
}

exports.showMessages = async (req, res) => {
    const messages = await Message.getAll();
    res.render('messages', {messages});
}
