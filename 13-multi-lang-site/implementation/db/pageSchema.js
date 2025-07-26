const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
    caption: {
        type: Object,
    },
    text: {
        type: Object,
    },
    image: {
        type: String,
    }
}, {
    timestamps: true,
    optimisticConcurrency: true
});

const Pages = mongoose.model('pages', pageSchema);

module.exports = Pages;