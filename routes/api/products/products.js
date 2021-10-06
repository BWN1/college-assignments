// Router
const express = require('express');
const router = express.Router();

// Products database functions
const {
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  addProduct,
} = require('../../../models/products');
const { handleValidResponse, handleErrorResponse } = require('../utils');

router.get('/', async (req, res) => {
  const products = await getAllProducts();
  if (!!products) handleValidResponse(res, products);
  else handleErrorResponse(req, res, 404, 'Could not find products');
});

router.post('/', async (req, res) => {
  addProduct(req.body)
    .then((message) => handleValidResponse(res, message))
    .catch((error) => handleErrorResponse(req, res, 500, error));
});

router.get('/:id', async (req, res) => {
  const product = await getProduct(req.params.id);
  if (!!product) handleValidResponse(res, product);
  else handleErrorResponse(req, res, 404, 'Product does not exist');
});

router.put('/:id', async (req, res) => {
  const product = await updateProduct(req.params.id, req.body);
  if (!!product) handleValidResponse(res, 'Updated product!');
  else if (product === null)
    handleErrorResponse(req, res, 404, 'Product does not exist');
  else handleErrorResponse(req, res, 500, 'Could not update product');
});

router.delete('/:id', async (req, res) => {
  const product = await deleteProduct(req.params.id);
  if (!!product) handleValidResponse(res, 'Deleted product!');
  else handleErrorResponse(req, res, 404, 'Product does not exist');
});

module.exports = router;
