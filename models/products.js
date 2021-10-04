const { Products } = require('./schemas/productsSchema');
const {
  allRequiredFieldsIncluded,
  priceIsNumber,
  photoURLIsValid,
  bestSellerIsBoolean,
} = require('./utils/productsUtils');

const getAllProducts = async () => Products.find({}).lean().exec();
const getAllCategories = async () =>
  Products.distinct('category').lean().exec();

const getAllProductsInCategory = async (category) =>
  Products.find({ category }).lean().exec();

const getAllBestSellers = async () =>
  Products.find({ bestSeller: true }).lean().exec();

const getProduct = async (productId) =>
  Products.findOne({ productId }).lean().exec();

const updateProduct = async (productId, product) => {
  const { _id, productId: id, ...rest } = { ...product };
  return Products.findOneAndUpdate({ productId }, { ...rest });
};

const deleteProduct = async (id) => Products.findByIdAndDelete(id).exec();
const addProduct = async (product) => {
  if (allRequiredFieldsIncluded(product)) {
    const { price, bestSeller, photoURL } = product;

    if (!priceIsNumber(price)) return Promise.reject('Invalid price');
    else if (!photoURLIsValid(photoURL))
      return Promise.reject('Invalid photo url');
    else if (!bestSellerIsBoolean(bestSeller))
      return Promise.reject('Best seller must be a boolean (true/false)');

    Products({ ...product }).save();
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
