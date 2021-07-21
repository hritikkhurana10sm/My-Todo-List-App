//require express

const express = require('express');
const port = 800;

//enabling the express
const app = express();

//setting up view engine
app.set('view engine' , 'ejs');
app.set('views' , './views');

//adding assets
app.use(express.static('assets'));

//used to bind the data comming from input 
app.use(express.urlencoded());

//adding middleware here
app.use('/' , require('./routes/index.js'));


const db = require('./config/mongoose');
// const Todo = require('./models/todo_list');

app.listen(port , function(err){
     if(err){
         console.log('Uhh..Server not running!!');
         return;
     }
     console.log(`Great! Server is running on Port : ${port}`);
});