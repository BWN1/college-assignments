const { Customer } = require('./schemas/customerSchema');
const bcrypt = require('bcryptjs');

const getCustomer = async (id) => await Customer.findById(id).exec();
const registerCustomer = async (customer) => {
  const { fname, lname, email, password, phoneNumbers } = customer;

  // Check for required fields
  if (fname && lname && email && password) {
    // Encrypt password and create customer
    const hashed = await bcrypt.hash(password, 10);
    const customer = new Customer({
      fname,
      lname,
      email,
      password: hashed,
      phoneNumbers: phoneNumbers || [],
    });
    return await customer.save();
  }

  return Promise.reject('Error adding customer');
};

module.exports = {
  getCustomer,
  registerCustomer,
};
