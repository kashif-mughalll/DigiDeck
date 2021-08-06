const quoteModal = require("../Modals/quotesModal")


exports.getQuotes = async (req, res) => {
    try {
        const response = await quoteModal.find(req.query)
        res.status(200).json({
            status: 'success',
            results: response.length,
            data: response
        })
    } catch (err) {
        res.status(503).json({
            status: 'failed',
            msg: err.message
        })
        console.log(err)
    }
}


exports.addNewQuote = async (req, res) => {
    try {
        const response = await quoteModal.create(req.body)
        res.status(200).json({
            status: 'success',
            data: response
        })
    } catch (err) {
        res.status(503).json({
            status: 'failed',
            msg: err.message,
        })
        console.log(err)
    }
}