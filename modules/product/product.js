const productMssql = require('./product.mssql');
class product {
    async getAllProducts(req, res) {
      try {
         const output = await productMssql.getAllProducts();
         res.send(output);
      }
      catch (error) {
      console.log(error);
    }
 }
}
module.exports = new product();
/*
class product {
async getAllProducts(req, res) {
try {
const output = await productMssql.getAllProducts();
res.sendResponse(output);
}
catch (error) {
console.log(error);
res.sendError(global.HELPER.getException({ error, message: 'Error in getting products list.' }));
}
}
async addProduct(req, res) {
try {
const output = await productMssql.addProduct(req.body);
res.send(output);
}
catch (error) {
console.log(error);
res.sendError(global.HELPER.getException({ error, message: 'Error in adding product.' }));
}
}
async updateProduct(req, res) {
try {
const output = await productMssql.updateProduct(req.body);
res.send(output);
}
catch (error) {
console.log(error);
res.sendError(global.HELPER.getException({ error, message: 'Error in updating product.' }));
}
}
async deleteProduct(req, res) {
const id = req.params.id;
try {
if (!id) {
throw new global.EXCEPTION('ValidationError', 'please provide id');
}
const output = await productMssql.deleteProduct(id);
res.send(output);
}
catch (error) {
console.log(error);
res.sendError(global.HELPER.getException({ error, message: 'Error in deleting product.' }));
}
}
}
module.exports = new product();
*/