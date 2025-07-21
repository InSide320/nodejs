const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    username: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
}, {
    timestamps: true,
    optimisticConcurrency: true
});

module.exports = mongoose.model('User', userSchema);
