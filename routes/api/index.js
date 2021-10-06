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

// Send all available endpoints as JSON object
router.get('/', (req, res) => {
  res.json({
    message: 'all endpoints are available through /api/ route',
    endpoints: {
      customer: {
        route: '/api/customers',
        endpoints: {
          getCustomer: 'GET api/customers/:customer',
          registerCustomer: 'POST api/customers/',
        },
      },
      products: {
        route: '/api/products',
        endpoints: {
          getAllProducts: 'GET api/products/',
          getById: 'GET api/products/:id',
          getAllCategories: 'GET api/products/categories',
          getAllByCategory: 'GET api/products/categories/:category',
          getBestSellers: 'GET api/products/bestsellers',
          addProduct: 'POST api/products/',
          updateProduct: 'PUT api/products/:id',
          deleteProduct: 'DELETE api/products/:id',
        },
      },
    },
  });
});

router.use(handleUnsupportedEndpoints);

module.exports = router;
