// Router
const express = require('express');
const router = express.Router();

// Best sellers database functions
const { getAllBestSellers } = require('../../models');
const { handleValidResponse, handleErrorResponse } = require('./utils');

router.get('/', async (req, res) => {
  const bestSellers = await getAllBestSellers();
  console.log(bestSellers.length);
  if (bestSellers.length) handleValidResponse(res, bestSellers);
  else handleErrorResponse(req, res, 404, 'There are no best sellers');
});

module.exports = router;
