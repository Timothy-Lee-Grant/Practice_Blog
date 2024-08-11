const express = require('express');
const router = express.Router();

//middleware functions that service api requests
router.get('/test_api', (req, res) => {
    res.send("Is this the one that you wanted?")
})

router.get('', (req, res)=>{
    console.log("I just ran the app.get function");
    res.send("Hello world. I got it!!!");
})

//Watched a video about modules. It said that each file is called a 'module' and the functions/variables
//defined in that file are contained in that module. Performing a module.export will allow access into this
//file's functions and variables. But what does the keyword 'router' acutally mean?
module.exports = router;