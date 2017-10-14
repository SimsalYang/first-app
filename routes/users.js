var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is Simon & Sally\'s WebApp!');
});

module.exports = router;
