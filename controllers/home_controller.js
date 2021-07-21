const Todo = require('../models/todo_list');

module.exports.home = function(req , res){
      

    console.log("rendering the home page");
    
    Todo.find({} , function(err , list){
    
      if(err){

        console.log("uhh . erroer in route contriller home");
        return;
      }
        return res.render('home' , {
        'title'  : 'TODO List',
        'list' : list
    });

    });

};
    //return res.end('<h1>This is Home Controller</h1>');
