//requiring schema
const Todo = require('../models/todo_list');

//exporting as we need this in its router
module.exports.del = function (req, res) {


      var obj = req.query;
      //number of keys present in the object
      var count = Object.keys(obj).length;

      for (let i = 0; i < count; i++) {

            //deleting the element in data base
            Todo.findByIdAndDelete(Object.keys(obj)[i], function (err) {

                  if (err) {
                        console.log("Error in deleting an object from database!");
                        return;
                  }
            })
      };
      //getting back to home / parent page
      return res.redirect('back');
};