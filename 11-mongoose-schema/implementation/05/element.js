const mongoose = require('mongoose');

const elementSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String,
        validate: {
            validator: function(v) {
                return /\s/.test(v);
            },
            message: props => `${props.value} не містить пробілу!`
        }
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