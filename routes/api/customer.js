// Router
const express = require('express');
const router = express.Router();

// Customer database functions
const { getCustomer, registerCustomer } = require('../../models/customer');

router.get('/:id', (req, res) => {
  getCustomer(req.params.id);
  res.json({ message: 'api/customer' });
});

router.post('/', (req, res) => {
  registerCustomer(req.body);
  res.json({ message: 'added customer!' });
});

module.exports = router;
