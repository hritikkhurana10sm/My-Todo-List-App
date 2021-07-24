//require schema
const Todo = require('../models/todo_list');

//exporting this as we needed in its concerned router
module.exports.home = function (req, res) {

  //rendering the home page
  console.log("rendering the home page");

  //this is used to find all the properties and pass that in ejs so as to render accordingly
  Todo.find({}, function (err, list) {

    //handling error
    if (err) {
      console.log("uhh . error in route controller home");
      return;
    }

    //rendering the page
    //home is ejs file here
    return res.render('home', {
      'title': 'TODO LIST',
      'list': list
    });

  });

};
    //return res.end('<h1>This is Home Controller</h1>');
