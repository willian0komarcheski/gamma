const userService = require('../Services/UserService');
const config = require('../Config/config');

// Controladores relacionados aos usuários, como criar usuário, fazer login, obter usuário por ID e obter todos os usuários.
class UserController {
  async createUser(req, res) { // adiciona um Usuario com os dados fornecidos ao banco de dados MYSQL e gera um token JWT
    const { name, password, email } = req.body;
    try {
      const user = await userService.createUser(name, password, email);
      const token = user.generateAuthToken();
      res.json({ user, token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async loginUser(req, res) { // pede um email e verifica se a senha fornecida é a mesma do banco de dados, e depois gera um token JWT
    const { email, password } = req.body;
    try {
      const user = await userService.getUserByEmail(email);

      if (user && user.Password === password) {
        const token = user.generateAuthToken();
        res.json({ user, token });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUserById(req, res) { // pede um Id e mostra um usuario correspondente a este Id
    const { id } = req.params;
    try {
      const user = await userService.getUserById(id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllUsers(req, res) { //mostra todos os Usuarios armazenados no banco de dados
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
module.exports = new UserController;
