var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/:username', function(req, res, next) {
  res.send('hello username')
})

module.exports = router;
