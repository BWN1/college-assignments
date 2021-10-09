const express = require('express');
const router = express.Router();

// Parse responses to JSON
router.use(express.json());

// Router files
const customerRouter = require('./customer');
const {
  productsRouter,
  categoriesRouter,
  bestSellersRouter,
} = require('./products');
const { handleUnsupportedEndpoints } = require('./utils');

// Routes
router.use('/customer', customerRouter);
router.use('/products', productsRouter);
router.use('/categories', categoriesRouter);
router.use('/best-sellers', bestSellersRouter);
router.use(handleUnsupportedEndpoints);

module.exports = router;
