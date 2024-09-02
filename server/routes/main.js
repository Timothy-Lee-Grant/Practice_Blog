const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//middleware functions that service api requests
router.get('', async (req, res) => {
    const locals = {
        title: "NodeJs Blog",
        description: "A simple blog that I am making to practice my skills with express, nodejs, and mongodb."
    }

    try {
        const data = await Post.find();
        //Notice how I am able to pass in two arguments. This will go to the main.ejs template, and then inside of the main.ejs file I use those <%= xxxx %> 
        //to be able to place in variables into that specific location in order to costomize it. In this instance I can do <%= locals.description %> to 
        //access the description field.
        res.render('index', {locals, data});
    } catch (error) {
        console.log(error);
    }

    
})

router.get('', (req, res) => {
    res.render('index');
})


function insertPostData(){
    Post.insertMany([
        {
            title: "A blog title that I just created",
            body: "This is the body of the blog post that I want to create. "
        },
        {
            title: "Another Blog title",
            body: "Another body to another blog."
        },
    ])
}

//insertPostData();


//seems as if when I do this render, I am able to put the 'render' as an argument. This will tell the '/about' api (this api) to 
//utilize the about.ejs file. So previously in the app.js, we told express to set 'layout' to be directed to the ./views/layouts/main.ejs (actually we did not need to set the views directory, even though the file is in views)
//This seems to be the main layout that we will render and show to the user when the user requests this /about api and all other apis. But
//because we pass in 'about' as a parameter, in the main.ejs, we are able to speficy a folder that has content that will costomize the standard 
//template that we are using in the main.ejs 
router.get('/about', (req, res) =>{
    res.render('about')
})

//not working
router.get('/contact',(req, res)=>{
    res.render('contact')
})
/*
router.get('/test_api', (req, res) => {
    res.send("Is this the one that you wanted?")
})

router.get('', (req, res)=>{
    console.log("I just ran the app.get function");
    res.send("Hello world. I got it!!!");
})
*/

//Watched a video about modules. It said that each file is called a 'module' and the functions/variables
//defined in that file are contained in that module. Performing a module.export will allow access into this
//file's functions and variables. But what does the keyword 'router' acutally mean?
module.exports = router;