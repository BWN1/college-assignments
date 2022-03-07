const { Products } = require('./schemas');
const {
  allProductRequiredFieldsIncluded,
  validateProductFields,
  extractAndSanitizeProductFields,
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
    { ...extractAndSanitizeProductFields(product) }
  );

const deleteProduct = async (productId) =>
  Products.findOneAndDelete({ productId }).exec();

const addProduct = async (product) => {
  if (allProductRequiredFieldsIncluded(product)) {
    const error = validateProductFields(product);
    if (error) return Promise.reject(error);

    const addedProduct = await Products({
      ...extractAndSanitizeProductFields(product),
    })
      .save()
      .catch(() => Promise.reject('Error adding product'));

    return Promise.resolve({
      message: 'Product added!',
      id: addedProduct.productId,
    });
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
