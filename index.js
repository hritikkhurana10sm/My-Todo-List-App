//require express
const express = require('express');

//working on port 8000
const port = 8000;

//enabling the express
const app = express();

//setting up view engine
app.set('view engine' , 'ejs');
app.set('views' , './views');

//adding assets
app.use(express.static('assets'));

//used to bind the data comming from input (like req.body)
app.use(express.urlencoded());

//adding middleware here
app.use('/' , require('./routes/index.js'));

//requiring the database
const db = require('./config/mongoose');

//connecting to the port
app.listen(port , function(err){
     if(err){
         console.log('Uhh..Server not running!!');
         return;
     }
     console.log(`Great! Server is running on Port : ${port}`);
});