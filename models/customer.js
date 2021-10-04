const { Customer } = require('./schemas/customerSchema');
const { validEmail, encryptPassword } = require('./utils/customerUtils');

const getCustomer = async (id) => await Customer.findById(id).exec();
const registerCustomer = async (customer) => {
  const { fname, lname, email, password, phoneNumbers } = customer;

  // Check for required fields
  if (fname && lname && email && password) {
    if (!validEmail(email)) return Promise.reject('Invalid email');

    const customer = new Customer({
      fname,
      lname,
      email,
      password: await encryptPassword(password),
      phoneNumbers: phoneNumbers || [],
    });
    return await customer.save();
  }

  return Promise.reject('Missing required fields');
};

module.exports = {
  getCustomer,
  registerCustomer,
};
