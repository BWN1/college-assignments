// Router
const express = require('express');
const router = express.Router();

// Customer database functions
const { getCustomer, registerCustomer } = require('../../models/customer');
const { handleValidResponse, handleErrorResponse } = require('./utils');

router.get('/:id', async (req, res) => {
  const customer = await getCustomer(req.params.id);
  if (!!customer) handleValidResponse(res, customer);
  else handleErrorResponse(req, res, 404, 'Customer does not exist');
});

router.post('/', (req, res) => {
  registerCustomer(req.body)
    .then((message) => handleValidResponse(res, message))
    .catch((error) => handleErrorResponse(req, res, 500, error));
});

module.exports = router;
