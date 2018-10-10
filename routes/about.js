var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/about.pug', {'page': 'about'});
});

module.exports = router;