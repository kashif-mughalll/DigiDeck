const express = require('express');
const router = express.Router();
const { getQuotes, addNewQuote } = require('../Controllers/quotesControllers');


router.route("/").get(getQuotes).post(addNewQuote)

module.exports = router;
