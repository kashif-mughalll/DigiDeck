require("dotenv").config();
const app = require("./app");
const mongoose = require('mongoose');


// mongoDB connection
mongoose.connect(process.env.MONGO_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("MongoDB connected");
    }).catch((err) => {
        console.error(err.message)
});


app.listen(process.env.PORT, () => {
    console.log("server started : " + process.env.PORT);
});
