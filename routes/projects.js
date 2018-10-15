/****************************************
* Imports
****************************************/

var express = require('express');
var router = express.Router();

// Controllers
var projectController = require('../controllers/projectController');

/****************************************
* Routes
****************************************/

router.get('/', projectController.projectLoadAll);

/****************************************
* Exports
****************************************/

module.exports = router;