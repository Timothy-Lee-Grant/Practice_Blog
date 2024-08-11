require('dotenv').config();

//express is a middlewear library that allows for easy handling of 
const express = require('express');
const expressLayout = require('express-ejs-layouts');

//Investigate - what does this 'express' actual do?
const app  = express();
const PORT = 8080 || process.env.PORT;


//trying to get this to work

app.use(express.static('public'));

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));


//end Trying to get this to work.


//my own experiment to see if I could create a costum api endpdoint instead of the app.get('', (vars)=>{funct})
/*
app.get('/test_api', (req, res) => {
    res.send("Is this the one that you wanted?")
})

app.get('', (req, res)=>{
    console.log("I just ran the app.get function");
    res.send("Hello world. I got it!!!");
})
*/

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`);
})