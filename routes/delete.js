//requiring express
const express = require('express');

//used to seperate rounter and controller
const router = express.Router();

//requiring delete controller 
const form = require('../controllers/delete_controller');

//router '/delete'
router.get('/', form.del);

//exporting the router
module.exports = router;
