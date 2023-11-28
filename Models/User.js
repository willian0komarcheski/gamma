const { DataTypes } = require('sequelize');
const sequelize = require('../ContextDatabase/Dbset');
const config = require('../Config/config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Definição do modelo de usuário com propriedades Id, Name, Password, Email
const User = sequelize.define('User', {
  Id: { //definindo Primary key Id
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: { //definindo o atributo nome
    type: DataTypes.STRING,
    allowNull: false,
  },
  Password: { //definindo o atributo senha
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: { //definindo o atributo email
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  // funçao que gera token
  generateAuthToken : function () {
    return jwt.sign({ Password: this.Password, email: this.Email }, config.jwtSecret, {
      expiresIn: '1h', // Token expira em 1 hora
    });
  },
});

module.exports = User;