const mongoose = require('mongoose');
const shortid = require('shortid');


const shortUrlSchema = mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortid.generate
    },
    clicks: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('ShortUrl', shortUrlSchema)