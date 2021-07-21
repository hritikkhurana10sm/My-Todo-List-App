const db = require('../config/mongoose');
const Todo = require('../models/todo_list');

module.exports.data = function(req , res){
 
       console.log('data ******** ' , req.body);
      
      Todo.create({

              text : req.body.text,
              option : req.body.option,
              date : req.body.date
              
      } , function(err , list){

         if(err){
                console.log("error in creating the object");
                return;
         }

         console.log('*/*/*/* ' , list);

         return res.redirect('back');
      });
       
};