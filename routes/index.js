const express = require('express');

//this is used to separate controller and router
const router = express.Router();



//to require home_controller here
const home_controller = require('../controllers/home_controller');

const form = require('../controllers/data_controller');



//for route /
router.get('/' , home_controller.home);

//post the form data
// router.use('/data' , require('./users'));
router.use('/data', require('./users'));

// router.post('/data' , form.data);

console.log("Hey , This is index router");

//to exports router
module.exports = router;
