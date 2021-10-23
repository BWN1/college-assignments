const {
  allCustomerRequiredFieldsIncluded,
  validateFields,
  encryptPassword,
  extractCustomerValidFields,
} = require('./customerUtils');

const {
  allProductRequiredFieldsIncluded,
  validateProductFields,
  extractAndSanitizeProductFields,
} = require('./productsUtils');

module.exports = {
  allCustomerRequiredFieldsIncluded,
  validateFields,
  encryptPassword,
  extractCustomerValidFields,
  allProductRequiredFieldsIncluded,
  validateProductFields,
  extractAndSanitizeProductFields,
};
