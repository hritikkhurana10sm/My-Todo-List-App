module.exports.data = function(req , res){
 
       console.log('data ******** ' , req.body);
       res.redirect('back');
};