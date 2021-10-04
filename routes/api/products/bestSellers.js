// Router
const express = require('express');
const router = express.Router();

// Best sellers database functions
const { getAllBestSellers } = require('../../../models/products');

router.get('/', async (req, res) => {
  res.json({ products: await getAllBestSellers() });
});

module.exports = router;
