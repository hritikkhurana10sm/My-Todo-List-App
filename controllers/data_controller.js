//to require the schema
const Todo = require('../models/todo_list');

//exporting the controller so as to use in its router 
module.exports.data = function (req, res) {

      //creating the object
      Todo.create({

            text: req.body.text,
            option: req.body.option,
            date: req.body.date,

      }, function (err, list) {

            if (err) {
                  console.log("error in creating the object");
                  return;
            }

            //returning back to initial point i.e '/'
            return res.redirect('back');
      });

};