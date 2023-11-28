// Models/Product.js
const { DataTypes } = require('sequelize');
const sequelize = require('../ContextDatabase/Dbset');

//Definição do modelo de produto com propriedades Id, Name, Category, e ListPrice.
const Product = sequelize.define('Product', {
  Id: { //definindo a Primary Key Id
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: { //definindo o atributo nome
    type: DataTypes.STRING,
    allowNull: false,
  },
  Category: { //definindo o atributo Categoria
    type: DataTypes.STRING,
    allowNull: false,
  },
  ListPrice: { //definindo o atributo Lista de Preço
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Product;