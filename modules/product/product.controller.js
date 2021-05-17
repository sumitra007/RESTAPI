const product = require('./product');
const express = require('express');
const router = express.Router();
class ProductController {
    constructor(app) {
      router.get('/', product.getAllProducts);
	  app.use('/api/v1/products', router);
	  /*router.post('/', product.addProduct);
	  app.use('/api/v1/addproduct', router);
	  router.post('/', product.updateProduct);
	  app.use('/api/v1/updateproduct', router);
	  router.post('/', product.deleteProduct);
	  app.use('/api/v1/deleteproduct', router); 
*/	  
    }
 }
module.exports = ProductController;