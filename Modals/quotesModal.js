const mongoose = require('mongoose');

let quotesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    quote: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        default: null,
        required: false
    }
},
    {
        timestamps: true
    }
)

const quoteModal = new mongoose.model('Quote', quotesSchema)

module.exports = quoteModal;