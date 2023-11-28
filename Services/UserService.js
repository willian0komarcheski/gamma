const User = require('../Models/User');

//Serviços relacionados aos usuários, como criar usuário, obter usuário por ID, obter usuário por e-mail e obter todos os usuários.
class UserService{
  async createUser(name, password, email) { //Metood que cria o Usuario
    return User.create({ Name: name, Password: password, Email: email });
  }

  async getUserById(id) { // metodo que acha o Usuario por Primary Key (Id)
    return User.findByPk(id);
  }

  async getUserByEmail(email) { // metodo que acha o Usuario por Email
    return User.findOne({ where: { Email: email } });
  }

  async getAllUsers() { //metodo que mostra todos os Usuarios
    return User.findAll();
  }
}

module.exports = new UserService;