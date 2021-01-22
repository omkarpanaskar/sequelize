'use strict';
const {
  Model
} = require('sequelize');
// const config = require('../config/config.json').development
// const sequelize = new Sequelize(config)
class User extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      fname: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNo: DataTypes.STRING
    }, {
      sequelize,
      // modelName: 'Users',
      tableName: 'Users'
    })
  }
};
const all=User.findAll()
console.log("::\n",all);
module.exports = User;