const handleValidResponse = (res, message) => res.status(200).json({ message });
const handleErrorResponse = ({ originalUrl: location }, res, status, message) =>
  res.status(status).json({ error: { location, status, message } });

module.exports = {
  handleValidResponse,
  handleErrorResponse,
};
