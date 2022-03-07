const express = require('express');
const cors = require('cors');
const router = express.Router();

// Parse responses to JSON
router.use(express.json());
router.use(cors({ origin: '*' }));

// Router files
const customerRouter = require('./customer');
const productsRouter = require('./products');
const categoriesRouter = require('./categories');
const bestSellersRouter = require('./bestSellers');
const { handleUnsupportedEndpoints } = require('./utils');

// Routes
router.use('/customer', customerRouter);
router.use('/products', productsRouter);
router.use('/categories', categoriesRouter);
router.use('/best-sellers', bestSellersRouter);
router.use(handleUnsupportedEndpoints);

module.exports = router;
