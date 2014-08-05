module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
  password: DataTypes.STRING,
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  token: DataTypes.STRING,
  enabled: DataTypes.BOOLEAN
  }, {
    associate: function(models) {
      User.hasMany(models.Task)
    }
  })

// dummy data
var user1 = User.build({
  email: 'me@gmail.com',
  password: "me", // normally we'd generate a password hash here
  first_name:"me",
  last_name:"meme",
token: "12345",
enabled: true
})
 
user1
  .save()
  .complete(function(err) {
    if (!!err) {
      console.log('The instance has not been saved:', err)
    } else {
      console.log('We have a persisted instance now')
    }
  })

  var user2 = User.build({
    email: 'you@gmail.com',
  password: "you", // normally we'd generate a password hash here
  first_name:"you",
  last_name:"youyou",
token: "67890",
enabled: true
})
 
user2
  .save()
  .complete(function(err) {
    if (!!err) {
      console.log('The instance has not been saved:', err)
    } else {
      console.log('We have a persisted instance now')
    }
  })


  return User
}
