// Middleware que verifica o token recebido
const jwt = require('jsonwebtoken');
const config = require('../Config/config');
const userService = require('../Services/UserService');

async function authenticateToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. Token not provided.' });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    const user = await userService.getUserById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'Invalid token. User not found.' });
    }

    req.user = user; // Adiciona o usuário autenticado ao objeto de solicitação
    next(); // Chama a próxima função no pipeline
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token.' });
  }
}

module.exports = authenticateToken;
