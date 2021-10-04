// Router
const express = require('express');
const router = express.Router();

// Categories database functions
const {
  getAllCategories,
  getAllProductsInCategory,
} = require('../../../models/products');

router.get('/', async (req, res) => {
  res.json({ products: await getAllCategories() });
});

router.get('/:category', async (req, res) => {
  res.json({ products: await getAllProductsInCategory(req.params.category) });
});

module.exports = router;
