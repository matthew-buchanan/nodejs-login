var express = require('express');
var router = express.Router();
var validate = require('../controllers/validate');
const { User } = require('../models/model');
const axios = require('axios').default;

router.get('/', function(req, res, next) {
  res.render('signup');
});
router.post('/', function(req, res, next) {
  var check = validate.checkValidity(req.body);
  if (check.pass) {
    User.findOne({ where: {
      username: req.body.username,
      password: req.body.password
    }}).then(user => {
      if (user) {
        res.render('signup', {
          userMessage: 'Username already in use.'
        })
      }
      else {
        User.create({
          username: req.body.username,
          password: req.body.password
        }).then(user => {
          console.log('user added:', JSON.stringify(user))
          res.redirect('/')
        })
      }
    })
  }
  else {
    res.render('signup', check)
  }
});

module.exports = router;
