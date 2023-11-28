const express = require('express');
const userController = require('../Controllers/UserController');
const productController = require('../Controllers/ProductController');
const authenticateToken = require('../Config/AuthMidleware');

const router = express.Router();

//Configuração das rotas para usuários e produtos, com as rotas obter usuario por Id,
//obter todos os usuarios, criar produtos, obter produtos por Id e obter todos os produtos
//necessitando do token

router.post('/users', userController.createUser); //criar usuário
router.post('/login', userController.loginUser); //fazer login
router.get('/users/:id', authenticateToken, userController.getUserById); //obter usuário por ID
router.get('/users', authenticateToken, userController.getAllUsers); //obter todos os usuários

router.post('/products', authenticateToken, productController.createProduct); //criar produto
router.get('/products/:id', authenticateToken, productController.getProductById); //obter produto por ID
router.get('/products', authenticateToken, productController.getAllProducts); //obter todos os produtos

module.exports = router;