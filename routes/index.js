var express = require('express');
var router = express.Router();

/* GET home page. */
function isLoggedIn(req, res, next) {
  if (req.session.user !== undefined) {
    next();
  } else {
    res.redirect("/login");
  }
}
router.get('/', isLoggedIn, function(req, res, next) {
  console.log(JSON.stringify(req.session.user))
  res.render('index', { 
    title: 'Passport Demo', 
    username:  req.session.user.username
  });
});

module.exports = router;
