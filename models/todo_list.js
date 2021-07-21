const mongoose = require('mongoose');


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

const todo = mongoose.model('todo' , listSchema);

module.exports = todo;