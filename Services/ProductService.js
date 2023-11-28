const Product = require('../Models/Product');

//Serviços relacionados aos produtos, como criar produto, obter produto por ID e obter todos os produtos.
class ProductService {
  async createProduct(name, category, listPrice) { //Metood que cria o Produto
    return Product.create({ Name: name, Category: category, ListPrice: listPrice });
  }

  async getProductById(id) { // metodo que acha o Produto por Primary Key (Id)
    return Product.findByPk(id);
  }

  async getAllProducts() { //metodo que mostra todos os Produtos
    return Product.findAll();
  }
}

module.exports = new ProductService;
