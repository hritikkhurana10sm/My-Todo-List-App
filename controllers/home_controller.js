const list = [
    {
        'text': "they here",
        'select' : "full",
        'date' : '12/45/552'
    },
    {
        'text': "they here",
        'select' : "full",
        'date' : '12/45/552'
    }
];

module.exports.home = function(req , res){
      
    console.log("home ***** " , req);
    return res.render('home' , {
        'title'  : 'TODO List',
        'list' : list
    });
    //return res.end('<h1>This is Home Controller</h1>');
};