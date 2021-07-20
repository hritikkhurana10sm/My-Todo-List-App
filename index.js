//require express
const express = require('express');
const port = 8000;

//enabling the express
const app = express();

app.listen(port , function(err){
     if(err){
         console.log('Uhh..Server not running!!');
         return;
     }
     console.log(`Great! Server is running on Port : ${port}`);
});