const handleValidResponse = (res, data) =>
  res.status(200).json(typeof data === 'string' ? { message: data } : { data });
const handleErrorResponse = ({ originalUrl: location }, res, status, message) =>
  res.status(status).json({ error: { location, status, message } });

module.exports = {
  handleValidResponse,
  handleErrorResponse,
};
