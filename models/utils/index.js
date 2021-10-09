const {
  allCustomerRequiredFieldsIncluded,
  validEmail,
  encryptPassword,
  extractCustomerValidFields,
} = require('./customerUtils');

const {
  allProductRequiredFieldsIncluded,
  validateProductFields,
  extractProductValidFields,
} = require('./productsUtils');

module.exports = {
  allCustomerRequiredFieldsIncluded,
  validEmail,
  encryptPassword,
  extractCustomerValidFields,
  allProductRequiredFieldsIncluded,
  validateProductFields,
  extractProductValidFields,
};
