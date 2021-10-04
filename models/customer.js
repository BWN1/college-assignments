const { Customer } = require('./schemas/customerSchema');
const {
  allRequiredFieldsIncluded,
  validEmail,
  encryptPassword,
} = require('./utils/customerUtils');

const getCustomer = async (id) => Customer.findById(id).lean().exec();
const registerCustomer = async (customer) => {
  if (allRequiredFieldsIncluded(customer)) {
    const { fname, lname, email, password, phoneNumbers } = customer;
    if (!validEmail(email)) return Promise.reject('Invalid email');

    Customer({
      fname,
      lname,
      email,
      password: await encryptPassword(password),
      phoneNumbers: phoneNumbers || [],
    }).save();
    return Promise.resolve('Added customer!');
  }

  return Promise.reject('Missing required fields');
};

module.exports = {
  getCustomer,
  registerCustomer,
};
