const priceRegEx = new RegExp(/^[0-9]*$/);
const photoURLRegEx = new RegExp();
const booleanRegEx = new RegExp(
  /^(?:(1|y(?:es)?|t(?:rue)?|on)|(0|n(?:o)?|f(?:alse)?|off))$/i
);

const allRequiredFieldsIncluded = ({
  name,
  price,
  description,
  category,
  bestSeller,
  photoURL,
}) =>
  !!(
    name &&
    String(price) &&
    description &&
    category &&
    String(bestSeller) &&
    photoURL
  );

const priceIsNumber = (price) => priceRegEx.test(price);
const photoURLIsValid = (url) => photoURLRegEx.test(url);
const bestSellerIsBoolean = (bestSeller) => booleanRegEx.test(bestSeller);

module.exports = {
  allRequiredFieldsIncluded,
  priceIsNumber,
  photoURLIsValid,
  bestSellerIsBoolean,
};
