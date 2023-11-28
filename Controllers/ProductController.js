const productService = require('../Services/ProductService');

//Controladores relacionados aos produtos, como criar produto, obter produto por ID e obter todos os produtos.
class ProductController {
  async createProduct(req, res) { // armazena um Produto com os dados fornecidos no banco de dados
    const { name, category, listPrice } = req.body;
    try {
      const product = await productService.createProduct(name, category, listPrice);
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getProductById(req, res) { // pede um Id e mostra um Produto com o Id correspondente
    const { id } = req.params;
    try {
      const product = await productService.getProductById(id);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllProducts(req, res) { // mostra todos os produtos armazenados no banco de dados
    try {
      const products = await productService.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
module.exports = new ProductController;
