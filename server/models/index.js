const { getCustomer, registerCustomer } = require('./customer');
const {
  getAllProducts,
  getAllCategories,
  getAllProductsInCategory,
  getAllBestSellers,
  getProduct,
  updateProduct,
  deleteProduct,
  addProduct,
} = require('./products');

module.exports = {
  getCustomer,
  registerCustomer,
  getAllProducts,
  getAllCategories,
  getAllProductsInCategory,
  getAllBestSellers,
  getProduct,
  updateProduct,
  deleteProduct,
  addProduct,
};
