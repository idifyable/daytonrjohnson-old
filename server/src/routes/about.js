/**
 * Imports
 */

const express = require('express');

const router = express.Router();

/**
 * Routes
 */

router.get('/', (req, res) => {
  res.render('pages/about.pug', { page: 'about' });
});

/**
 * Exports
 */

module.exports = router;
