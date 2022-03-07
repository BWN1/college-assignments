const priceRegEx = new RegExp(/^[0-9]+(\.[0-9][0-9])?$/);
const photoURLRegEx = new RegExp(/(https?:\/\/.*\.(?:png|jpg|jpeg))/i);
const booleanRegEx = new RegExp(
  /^(?:(1|y(?:es)?|t(?:rue)?|on)|(0|n(?:o)?|f(?:alse)?|off))$/i
);
const categoryRegEx = new RegExp(/^[\S]+$/);

const priceIsNumber = (price) => priceRegEx.test(price);
const photoURLIsValid = (url) => photoURLRegEx.test(url);
const bestSellerIsBoolean = (bestSeller) => booleanRegEx.test(bestSeller);
const categoryIsValid = (category) => categoryRegEx.test(category);

const allProductRequiredFieldsIncluded = (product) => {
  const { name, price, description, category, bestSeller, photoURL } = product;
  return !!(
    name &&
    String(price) &&
    description &&
    category &&
    String(bestSeller) &&
    photoURL
  );
};

const validateProductFields = ({ price, photoURL, bestSeller, category }) => {
  if (!priceIsNumber(price)) return 'Invalid price';
  else if (!photoURLIsValid(photoURL)) return 'Invalid photo url';
  else if (!bestSellerIsBoolean(bestSeller))
    return 'Best seller must be a boolean (true/false)';
  else if (!categoryIsValid(category)) return 'Category cannot have spaces';
  return null;
};

const extractProductValidFields = ({
  name,
  price,
  description,
  category,
  quantity,
  bestSeller,
  photoURL,
}) => ({ name, price, description, category, quantity, bestSeller, photoURL });

const extractAndSanitizeProductFields = (product) =>
  Object.keys(extractProductValidFields(product))
    .filter((key) => !!product[key])
    .reduce((obj, key) => ((obj[key] = product[key]), obj), {});

module.exports = {
  allProductRequiredFieldsIncluded,
  validateProductFields,
  extractAndSanitizeProductFields,
};
