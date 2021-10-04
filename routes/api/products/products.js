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

router.get('/', async (req, res) => {
  res.json({ products: await getAllProducts() });
});

router.post('/', async (req, res) => {
  addProduct(req.body)
    .then((message) => res.json({ message }))
    .catch((error) => res.status(500).json({ error }));
});

router.get('/:id', async (req, res) => {
  res.json({ product: await getProduct(req.params.id) });
});

router.put('/:id', async (req, res) => {
  const product = await updateProduct(req.params.id, req.body);
  if (!!product) res.json({ message: 'Updated product!' });
  else res.status(500).json({ message: null });
});

router.delete('/:id', async (req, res) => {
  const product = await deleteProduct(req.params.id);
  if (!!product) res.json({ message: 'Deleted product!' });
  else res.status(500).json({ message: null });
});

module.exports = router;
