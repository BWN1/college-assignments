const { Customer } = require('./schemas/customerSchema');

const getCustomer = async (id) => await Customer.findById(id).exec;
const registerCustomer = (customer) => {};

module.exports = {
  getCustomer,
  registerCustomer,
};
