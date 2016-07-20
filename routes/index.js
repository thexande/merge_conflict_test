var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dog', function(req, res, next) {
  res.send('dog')
});

router.get('/cat', (q, s, n) => {
  res.send("woot")


module.exports = router;
