const mongoose = require('mongoose');

const elementSchema = new mongoose.Schema({
    brand: {
        type: String,
        minlength: 2,
        maxlength: 20
    },
    model: {
        type: String
    },
    year: {
        type: Number,
        min: 1980,
        max: new Date().getFullYear() + 1
    },
    color: {
        type: String
    },
    price: {
        type: Number,
        min: 0
    },
    vin: {
        type: String,
        minlength: 17,
        maxlength: 17,
        match: /^[A-HJ-NPR-Z0-9]+$/,
        uppercase: true,
    }
}, {
    timestamps: true, // автоматически создаёт поля createdAt и updatedAt
    optimisticConcurrency: true
});

const Element = mongoose.model('elements', elementSchema);

module.exports = Element;