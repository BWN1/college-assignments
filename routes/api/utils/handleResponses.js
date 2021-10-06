const handleValidResponse = (res, data) =>
  res.status(200).json(typeof data === 'string' ? { message: data } : { data });
const handleErrorResponse = ({ originalUrl: location }, res, status, message) =>
  res.status(status).json({ error: { location, status, message } });
const handleUnsupportedEndpoints = (req, res, next) => {
  if (req.method !== 'GET')
    handleErrorResponse(
      req,
      res,
      501,
      'The request method is unsupported for this resource'
    );
  else handleErrorResponse(req, res, 404, 'This resource does not exist');
};

module.exports = {
  handleValidResponse,
  handleErrorResponse,
  handleUnsupportedEndpoints,
};
