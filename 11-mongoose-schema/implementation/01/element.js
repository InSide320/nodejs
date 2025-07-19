const mongoose = require('mongoose');

const elementSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 10,
        maxlength: 300,
    },
    content: {
        type: String
    },
    tags: {
        type: [String]
    },
    published: {
        type: Boolean,
    },
}, {
    timestamps: true, // автоматически создаёт поля createdAt и updatedAt
    optimisticConcurrency: true
});

const Element = mongoose.model('elements', elementSchema);

module.exports = Element;