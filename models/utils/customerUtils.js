const bcrypt = require('bcryptjs');
const emailRegEx = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const phoneNumbersRegEx = new RegExp(/^[0-9]+$/);

const allCustomerRequiredFieldsIncluded = ({ fname, lname, email, password }) =>
  !!(fname && lname && email && password);
const encryptPassword = async (password) => bcrypt.hash(password, 10);
const validateFields = ({ email, phoneNumbers }) => {
  if (!emailRegEx.test(email)) return 'Invalid email';
  else if (phoneNumbers.some((number) => !phoneNumbersRegEx.test(number)))
    return 'Invalid phone number';
};
const extractCustomerValidFields = ({
  fname,
  lname,
  email,
  password,
  phoneNumbers,
}) => ({ fname, lname, email, password, phoneNumbers });

module.exports = {
  allCustomerRequiredFieldsIncluded,
  validateFields,
  encryptPassword,
  extractCustomerValidFields,
};
