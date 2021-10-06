// Router
const express = require('express');
const router = express.Router();

// Categories database functions
const {
  getAllCategories,
  getAllProductsInCategory,
} = require('../../../models/products');
const { handleValidResponse, handleErrorResponse } = require('../utils');

router.get('/', async (req, res) => {
  const categories = await getAllCategories();
  if (!!categories) handleValidResponse(res, categories);
  else handleErrorResponse(req, res, 404, 'Could not find categories');
});

router.get('/:category', async (req, res) => {
  const category = await getAllProductsInCategory(req.params.category);
  if (!!category) handleValidResponse(res, category);
  else handleErrorResponse(req, res, 404, 'Category does not exist');
});

module.exports = router;
