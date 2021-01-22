const { Sequelize, DataTypes } = require('sequelize');
const PostData = require('./config/PostData').postData;
const UserData = require('./config/UserData').data;
const app = require('./app');
const config = require('./config/config.json').development
const sequelize = new Sequelize(config)
const Post = sequelize.define('Posts', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNo: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  fname: {
    type: DataTypes.STRING,

  },
  email: {
    type: DataTypes.STRING,

  },
  phoneNo: {
    type: DataTypes.STRING,

  },

})

// User.hasOne(Post)       // 1:1 relationship 
sequelize.sync({        // This creates the table if it doesn't exist (and does nothing if it already exists)
  logging: console.log,    // Default, displays the first parameter of the log function call
  force: true,       //This creates the table, dropping it first if it already existed
  // alter: true        // This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), 
  //and then performs the necessary changes in the table to make it match the model.
}).then(() => {
  console.log('succesfull connected');
}).then(() => {
  // Post.bulkCreate(PostData) // add data to database table 
  User.bulkCreate(UserData)
  console.log("\n::data inserted");
})
  .catch((err) => {
    console.log('unable to conect', err)
  })
module.exports = { sequelize }