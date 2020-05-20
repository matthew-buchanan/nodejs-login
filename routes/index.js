var express = require('express');
var router = express.Router();
var task = require('../controllers/taskController');

router.get('/', function(req, res, next) {
  if (req.session.user == undefined) {
    res.render('landing');
  } else {
    task.getAllTasks(req.session.user.id, function(data) {
      reminders = data.map(elem => elem.name);
      res.render('index', { 
        title: 'Passport Demo', 
        username:  req.session.user.username,
        task: reminders
      });
    })
  }
});
router.post('/', function(req, res, next) {
  if (req.session.user == undefined) {
    res.render('landing');
  } else {
    task.createTask(req.session.user.id, req.body.task);
    res.redirect('/');
  }
});

router.get('/logout', function(req, res, next) {
  req.session.user = undefined;
  res.redirect('/');
});

module.exports = router;
