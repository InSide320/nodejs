const mongoose = require('mongoose');

const elementSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    birthDate: {
        type: String,
        set: (date) => (/^\d{4}-\d{2}-\d{2}$/).test(date) ? date : undefined,
    },
    email: {
        type: String
    },
    phone: {
        type: String,
        set: (phone) => (/^\+\d{12}$/).test(phone) ? phone : undefined,
    }
}, {
    timestamps: true, // автоматически создаёт поля createdAt и updatedAt
    optimisticConcurrency: true
});

const Element = mongoose.model('elements', elementSchema);

module.exports = Element;