const { User } = require('./model');

function myDeserialize(id) {
  User.findOne({where: {id: id}}).then(user => {
    console.log('deserialized', user);
  })
}

myDeserialize(1);

