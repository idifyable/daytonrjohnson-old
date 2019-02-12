/**
 * Imports
 */

const express = require('express');

const router = express.Router();

/**
 * Controllers
 */

const projectController = require('../controllers/projectController');

/**
 * Routes
 */

router.get('/', projectController.projectLoadAllHome);

/**
 * Exports
 */

module.exports = router;
