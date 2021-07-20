const express = require('express');

//this is used to separate controller and router
const router = express.Router();

//to require home_controller here
const home_controller = require('../controllers/home_controller');

//for route /
router.get('/' , home_controller.home);

console.log("Hey , This is index router");

//to exports router
module.exports = router;
