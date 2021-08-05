const express = require('express');
const router = express.Router();

// router.get("/Getquotes",(req,res)=>{
    // api creation
// })





//  get all quotes in DB
router.route("/").get((req,res)=>{
    res.status(200).json({
        msg : 'hello'
    })
})


module.exports = router;
