// Router
const express = require('express');
const router = express.Router();

// Customer database functions
const { getCustomer, registerCustomer } = require('../../models/customer');

router.get('/:id', (req, res) => {
  getCustomer(req.params.id).then((customer) => {
    if (customer) res.json({ customer });
    else res.status(500).json({ message: 'Unable to find customer' });
  });
});

router.post('/', (req, res) => {
  registerCustomer(req.body)
    .then(() => res.json({ message: 'Added customer!' }))
    .catch((error) => res.status(500).json({ message: `${error}` }));
});

module.exports = router;
