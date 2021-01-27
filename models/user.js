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
<<<<<<< HEAD
module.exports = User;
=======
module.exports = User;
>>>>>>> e69d8c95d43d914bce467a6ec10541ed81116c60
