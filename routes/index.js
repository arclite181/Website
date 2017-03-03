var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/mystory', function(req, res, next) {
    res.render('mystory', { title: 'Express' });
});

router.get('/tendrils', function(req, res, next) {
    res.render('tendrils', { title: 'Express' });
});

router.get('/resume', function(req, res, next) {
    res.render('resume', { title: 'Express' });
});




module.exports = router;
