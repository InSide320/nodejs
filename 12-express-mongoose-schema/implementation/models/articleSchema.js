const mongoose = require('mongoose');
const commentSchema = require('./commentSchema.js');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        unique: true
    },
    content: {
        type: String,
    },
    comments: {
        type: [Object],
        of: commentSchema,
    }
}, {
    timestamps: true,
    optimisticConcurrency: true
});

const Articles = mongoose.model('articles', articleSchema);

module.exports = Articles;