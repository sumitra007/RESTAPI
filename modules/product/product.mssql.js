const mssqlcon = require('../../dbconnection');

class ProductMSSql {
async getAllProducts() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().query('select * from projects');
    return res.recordset;
  }
}
/*class ProductMSSql {
async getAllProducts() {
	console.log("sumitra");
	console.log(global.MSSQLConnection);
const res = await global.MSSQLConnection.request()
.execute("getAllProducts");

return res.recordset;
}
async addProduct(prod) {
const res = await global.MSSQLConnection.request()
.input("product_name", prod.product_name)
.input("product_price", prod.product_price)
.input("product_description", prod.product_description)
.input("product_qty", prod.product_qty)
.execute("addProduct");
return res;
}
async updateProduct(prod) {
const res = await global.MSSQLConnection.request()
.input("product_id", prod.product_id)
.input("product_name", prod.product_name)
.input("product_price", prod.product_price)
.input("product_description", prod.product_description)
.input("product_qty", prod.product_qty)
.execute("updateProduct");
return res;
}
async deleteProduct(id) {
const res = await global.MSSQLConnection.request()
.input("product_id", id)
.execute("deleteProduct");
return res;
}
}*/
module.exports = new ProductMSSql();