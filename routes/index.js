var express = require('express');
var router = express.Router();

// get each page and load the view
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab 4' });
});

router.get('/martin', function(req, res, next) {
  res.render('martin', { title: 'Martin' });
});

router.get('/raymond', function(req, res, next) {
  res.render('raymond', { title: 'Raymond' });
});

router.get('/grant', function(req, res, next) {
  res.render('grant', { title: 'Grant' });
});

router.get('/jeff', function(req, res, next) {
  res.render('jeff', { title: 'Jeff' });
});

router.get('/sandra', function(req, res, next) {
  res.render('sandra', { title: 'Sandra' });
});

module.exports = router;
