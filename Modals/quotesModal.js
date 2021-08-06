const mongoose = require('mongoose');

let quotesSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true,
    },
    quote: {
        type: String,
        required : true
    },
    uid: {
        type: String,
        default: null,
        required : false
    }
})

const quoteModal = new mongoose.model('Quote', quotesSchema)

module.exports = quoteModal;