'use strict';
const {
  Sequelize
} = require('sequelize');
class User extends Sequelize.Model {
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
module.exports = User;