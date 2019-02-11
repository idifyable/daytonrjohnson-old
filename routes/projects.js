/**
 * Imports
 */

const express = require('express');

const router = express.Router();

// Controllers
const projectController = require('../controllers/projectController');

/**
 * Routes
 */

router.get('/', projectController.projectLoadAll);

/**
 * Exports
 * */

module.exports = router;
