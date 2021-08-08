const express = require('express');
const router = express.Router();
const { getQuotes, addNewQuote, updateQuote, deleteQuote } = require('../Controllers/quotesControllers');

router.route("/:id")
    .get(getQuotes)
    .post(addNewQuote)
    .put(updateQuote)
    .delete(deleteQuote)

module.exports = router;
