const { Products } = require('./schemas/productsSchema');

const getAllProducts = async () => Products.find({}).lean().exec();
const getAllCategories = async () =>
  Products.distinct('category').lean().exec();

const getAllProductsInCategory = async (category) =>
  Products.find({ category }).lean().exec();

const getAllBestSellers = async () =>
  Products.find({ bestSeller: true }).lean().exec();

const getProduct = async (id) => Products.findById(id).lean().exec();
const updateProduct = async (id) => {};
const deleteProduct = async (id) => Products.findByIdAndDelete(id).exec();
const addProduct = async (product) => {};

module.exports = {
  getAllProducts,
  getAllCategories,
  getAllProductsInCategory,
  getAllBestSellers,
  getProduct,
  updateProduct,
  deleteProduct,
  addProduct,
};
