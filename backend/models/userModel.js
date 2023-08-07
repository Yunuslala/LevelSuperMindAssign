const { DataTypes } = require('sequelize');
const { connection } = require('../configs/connection');

// Define the User model with the required fields
const UserModel = connection.define('users', {
  // First name of the user
 Name:{
    type:DataTypes.STRING,
    allowNull:false,
 },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
        isEmail:true
    },
    unique:true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Mobile:{
    type:DataTypes.INTEGER,
    validate:{
        isNumber(value){
           const mobileNumberPattern = /^[1-9]\d{9}$/;
           if(!mobileNumberPattern.test(value)){
            throw new err("number is not valid give 10 digit")
           }
        }
    }
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM('male', 'female', 'other'),
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('admin', 'user','author'),
    allowNull: false,
    defaultValue: 'user', 
  },
});

// Export the User model for use in other parts of the application
module.exports = { UserModel};