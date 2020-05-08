var express = require('express');
var router = express.Router();
var passport = require('passport');
LocalStrategy = require('passport-local').Strategy;
var { User } = require('../models/model');

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({
      where: { 
        username: username
      }}).then(user => {
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!(user.password == password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({where: {id: id}}).then(user => {
    console.log('deserialized');
    done(null, user);
  });
});
router.get('/', function(req, res, next) {
  console.log(req.params)
  res.render('login');
});

router.post('/',
  passport.authenticate('local'), 
  function(req, res, next) {
    req.session.user = req.user;
    res.redirect('/');
  }
);

module.exports = router;