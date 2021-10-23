const {
  allCustomerRequiredFieldsIncluded,
  validEmail,
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
  validEmail,
  encryptPassword,
  extractCustomerValidFields,
  allProductRequiredFieldsIncluded,
  validateProductFields,
  extractAndSanitizeProductFields,
};
