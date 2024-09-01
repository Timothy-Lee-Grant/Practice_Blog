require('dotenv').config();

//express is a middlewear library that allows for easy handling of 
const express = require('express');
const expressLayout = require('express-ejs-layouts');

const connectDB = require('./server/config/db');

//Express is a service that allows handling of HTTP requests
const app  = express();
//PORT will be set to 8080 or the PORT specified in the process.env
const PORT = 8080 || process.env.PORT;

//connect the database
connectDB();

//This function will tell app (express) to look in 'public' as the folder location, to find static files (static files are those css, html, JS, ect) 
//This allows the client to access the files within 'public' and because the files are not dynamic, 
app.use(express.static('public'));

//layouts are a way to Embedded Java Script files 
//as of right now, not sure what that actually means or what it does. 
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));

//This will start the server (express) to perform the listen and will wait for HTTP requests that come to it over the port.
app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`);
})