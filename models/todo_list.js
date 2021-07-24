//to require the mongoose (a layer between mongdb and user to interact with data base)
const mongoose = require('mongoose');

//this is the schema in whch data will be present in database
const listSchema = new mongoose.Schema({

       text:{
            type : String,
            required : true
       },
       option:{
           type : String,
           required : true
       },
       date:{
          type : Date,
          required : true
       }      
});

//compiling
const todo = mongoose.model('todo' , listSchema);

//exporting 
module.exports = todo;