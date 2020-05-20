const { User } = require('./model');
const { Task } = require('./task');

User.sync();
Task.sync();