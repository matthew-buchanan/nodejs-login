const { User } = require('./model');

if (process.argv[2] == undefined || process.argv[3] !== '-p') {
  console.log(`
  node seed.js username -p password
  `)
} else {
  User.create({
    username: process.argv[2],
    password: process.argv[4]
  }).then(user => {
    console.log(user.toJSON());
  })
}

