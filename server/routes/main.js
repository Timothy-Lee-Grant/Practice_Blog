const express = require('express');
const router = express.Router();

router.get('/test_api', (req, res) => {
    res.send("Is this the one that you wanted?")
})

router.get('', (req, res)=>{
    console.log("I just ran the app.get function");
    res.send("Hello world. I got it!!!");
})

module.exports = router;