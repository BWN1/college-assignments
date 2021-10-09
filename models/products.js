const { Products } = require('./schemas');
const {
  allProductRequiredFieldsIncluded,
  validateProductFields,
  extractProductValidFields,
} = require('./utils');

const getAllProducts = async () => Products.find({}).lean().exec();
const getAllCategories = async () =>
  Products.distinct('category').lean().exec();

const getAllProductsInCategory = async (category) =>
  Products.find({ category }).lean().exec();

const getAllBestSellers = async () =>
  Products.find({ bestSeller: true }).lean().exec();

const getProduct = async (productId) =>
  Products.findOne({ productId }).lean().exec();

const updateProduct = async (productId, product) =>
  Products.findOneAndUpdate(
    { productId },
    { ...extractProductValidFields(product) }
  );

const deleteProduct = async (productId) =>
  Products.findOneAndDelete({ productId }).exec();

const addProduct = async (product) => {
  if (allProductRequiredFieldsIncluded(product)) {
    const error = validateProductFields(product);
    if (error) return Promise.reject(error);

    Products({ ...extractProductValidFields(product) }).save();
    return Promise.resolve('Product added!');
  }

  return Promise.reject('Missing required fields');
};

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
