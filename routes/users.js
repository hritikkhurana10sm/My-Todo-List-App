const express = require('express');

const router = express.Router();

const form = require('../controllers/data_controller');

router.post('/', form.data);

module.exports = router;
