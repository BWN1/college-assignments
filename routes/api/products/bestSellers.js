// Router
const express = require('express');
const router = express.Router();

// Best sellers database functions
const { getAllBestSellers } = require('../../../models/products');
const { handleValidResponse, handleErrorResponse } = require('../utils');

router.get('/', async (req, res) => {
  const bestSellers = await getAllBestSellers();
  if (!!bestSellers) handleValidResponse(res, bestSellers);
  else handleErrorResponse(req, res, 404, 'There are no best sellers');
});

module.exports = router;
