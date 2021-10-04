const bcrypt = require('bcryptjs');
const emailRegEx = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const allRequiredFieldsIncluded = ({ fname, lname, email, password }) =>
  !!(fname && lname && email && password);
const validEmail = (email) => emailRegEx.test(email);
const encryptPassword = async (password) => bcrypt.hash(password, 10);

module.exports = {
  allRequiredFieldsIncluded,
  validEmail,
  encryptPassword,
};
