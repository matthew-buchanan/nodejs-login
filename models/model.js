const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const path = require('path');
const dbPath = path.resolve(__dirname, 'db');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath
});

class User extends Model {}
User.init({
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'users'
});

module.exports = { User }

