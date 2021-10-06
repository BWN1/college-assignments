const { handleErrorResponse } = require('../utils');
const isIdValid = (req, res, next) =>
  isNaN(req.params.id)
    ? handleErrorResponse(req, res, 500, 'Invalid id. IDs must be numeric only')
    : next();

module.exports = {
  isIdValid,
};
