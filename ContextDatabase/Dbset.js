// Configuração do Sequelize para se conectar ao banco de dados MySQL.
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('foda' /*nome do banco*/, 'root' /*usuario do mysql*/, 'eu odeio banco de dados123' /*senha do mysql*/, {
  host: 'localhost', //host
  dialect: 'mysql', //tipo do banco de dados
});

module.exports = sequelize;
