const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const path = require('path');
const dbPath = path.resolve(__dirname, 'db');
const { User } = require('./model');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath
});

class Task extends Model {}
Task.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'tasks'
});
module.exports = { Task }

