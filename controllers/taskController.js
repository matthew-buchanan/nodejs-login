const { Task } = require('../models/task');

function createTask (id, name) {
  Task.create({
    name: name,
    user_id: id
  }).then(reminder => {
    console.log(reminder)
  })
}
function getAllTasks(id, cb) {
/*
getAllTasks(3, function(data) {
  reminders = data.map(elem => elem.name)
  console.log(reminders);
})
*/
  Task.findAll({
    where: {
      user_id: id
    }
  }).then(tasks => {
    cb(tasks);
  })
}

module.exports = { createTask, getAllTasks };


