const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    visible: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true,
    optimisticConcurrency: true,
});

const Comment = mongoose.model('comments', commentSchema);

module.exports = Comment;