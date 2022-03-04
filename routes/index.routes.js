const express = require('express');
const router = express.Router();
const indexController  = require('../controller/index.controller')

/* GET home page. */
router.get('/', indexController.index);

module.exports = router;
