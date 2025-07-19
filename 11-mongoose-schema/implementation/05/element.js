const mongoose = require('mongoose');

const elementSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    year: {
        type: Number,
        min: 1700,
        max: 2026
    }
}, {
    timestamps: true, // автоматически создаёт поля createdAt и updatedAt
    optimisticConcurrency: true
});

const Element = mongoose.model('elements', elementSchema);

module.exports = Element;