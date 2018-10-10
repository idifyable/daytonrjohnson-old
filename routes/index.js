var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index.pug', {'page': 'home'});
});

module.exports = router;