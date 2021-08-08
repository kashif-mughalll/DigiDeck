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

exports.updateQuote = async (req, res) => {
    try {
        const response = await quoteModal.updateOne({ _id: req.params.id }, req.body)
        res.status(200).json({
            status: 'success',
            _id: req.params.id,
            changes: response.n
        })
    } catch (err) {
        console.log(err)
        res.status(503).json({
            status: 'failed',
            msg: err.message
        })
    }
}

exports.deleteQuote = async (req, res) => {
    try {
        const response = await quoteModal.deleteOne({ _id: req.params.id })
        res.status(200).json({
            status: 'success',
            _id: req.params.id,
            deletedDocs: response.n
        })
    } catch (err) {
        res.status(503).json({
            status: 'failed',
            msg: err.message
        })
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