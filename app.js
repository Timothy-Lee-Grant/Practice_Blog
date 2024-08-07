require('dotenv').config();

const express = require('express');

//Investigate - what does this 'express' actual do?
const app  = express();
const PORT = 8080 || process.env.PORT;

app.get('', (req, res)=>{
    res.send("Hellow world");
})

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`);
})