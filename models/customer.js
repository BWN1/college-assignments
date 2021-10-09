const { Customer } = require('./schemas');
const {
  allCustomerRequiredFieldsIncluded,
  validEmail,
  encryptPassword,
  extractCustomerValidFields,
} = require('./utils');

const getCustomer = async (customerId) =>
  Customer.findOne({ customerId }).lean().exec();
const registerCustomer = async (customer) => {
  if (allCustomerRequiredFieldsIncluded(customer)) {
    const { email, password, ...rest } = extractCustomerValidFields(customer);
    if (!validEmail(email)) return Promise.reject('Invalid email');

    Customer({
      email,
      password: await encryptPassword(password),
      ...rest,
    }).save();
    return Promise.resolve('Added customer!');
  }

  return Promise.reject('Missing required fields');
};

module.exports = {
  getCustomer,
  registerCustomer,
};
