const express = require("express");
const quotesRoute = require('./Routes/quotesRoute')


// app creation
const app = express();


//midle wares...
app.use(express.json());



//Routes....
app.use('/api/quotes', quotesRoute)



module.exports = app;