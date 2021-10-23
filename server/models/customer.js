const { Customer } = require('./schemas');
const {
  allCustomerRequiredFieldsIncluded,
  validateFields,
  encryptPassword,
  extractCustomerValidFields,
} = require('./utils');

const getCustomer = async (customerId) =>
  Customer.findOne({ customerId }).lean().exec();
const registerCustomer = async (customer) => {
  if (allCustomerRequiredFieldsIncluded(customer)) {
    const { password, ...rest } = extractCustomerValidFields(customer);
    const invalid = validateFields(customer);
    if (!!invalid) return Promise.reject(invalid);

    const savedCustomer = await Customer({
      password: await encryptPassword(password),
      ...rest,
    }).save();
    return Promise.resolve({
      message: 'Added customer!',
      customerId: savedCustomer.customerId,
    });
  }

  return Promise.reject('Missing required fields');
};

module.exports = {
  getCustomer,
  registerCustomer,
};
