var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if (req.session.user == undefined) {
    res.render('landing');
  } else {
    res.render('index', { 
      title: 'Passport Demo', 
      username:  req.session.user.username
    });
  }
});
router.get('/logout', function(req, res, next) {
  req.session.user = undefined;
  res.redirect('/');
});

module.exports = router;
