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

router.get('/', projectController.projectLoadAllHome);

/****************************************
* Exports
****************************************/

module.exports = router;