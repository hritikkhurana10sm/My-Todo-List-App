//requiring the express
const express = require('express');

//this is used to separate controller and router
const router = express.Router();

//to require home_controller here
const home_controller = require('../controllers/home_controller');

const form = require('../controllers/data_controller');

//for route /
router.get('/' , home_controller.home);

//post the form data  , route '/data' : send data to server : post request
router.use('/data', require('./users'));

//to delete the data from server , we use 'get' request so as to get acknowledgement of deleting data
router.use('/delete' , require('./delete'));

//this is a check
console.log("Hey , This is index router");

//to exports router
module.exports = router;
