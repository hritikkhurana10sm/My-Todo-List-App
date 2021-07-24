//to include the express
const express = require('express');

//used to seperate router and controller
const router = express.Router();

//to include the controller
const form = require('../controllers/data_controller');

//to post the data to the mongo data base
router.post('/', form.data);

//export router to use it outside also
module.exports = router;
