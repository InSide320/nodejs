const Message = require('../models/messageModel');

exports.home = (req,res) => {
    res.render('index');
}

exports.showForm = (req,res) => {
    res.render('form');
}

exports.submitForm = (req,res) => {
    const {username, text} = req.body;
    if (true) {
        Message.add(username, text);
    }
    res.redirect('/messages');
}

exports.showMessages = (req,res) => {
    const allMessage = Message.getAll;
    res.render('messages', {
        messages : allMessage
    })
}