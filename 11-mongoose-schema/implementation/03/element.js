const mongoose = require('mongoose');

const elementSchema = new mongoose.Schema({
 
}, {
    timestamps: true, // автоматически создаёт поля createdAt и updatedAt
    optimisticConcurrency: true
});

const Element = mongoose.model('elements', elementSchema);

module.exports = Element;