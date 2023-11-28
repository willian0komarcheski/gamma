//Configuração do aplicativo Express, incluindo o uso de body-parser para analisar o corpo das solicitações.
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./Router');
const sequelize = require('./ContextDatabase/Dbset');

const app = express();

app.use(express.json());
app.use('/api', router);

const PORT = process.env.PORT || 3000; //porta que ira rodar o projeto

// Sincroniza o Sequelize com o banco de dados e inicia o servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});