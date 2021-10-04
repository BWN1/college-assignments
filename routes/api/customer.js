// Router
const express = require('express');
const router = express.Router();

// Customer database functions
const { getCustomer, registerCustomer } = require('../../models/customer');

router.get('/:id', async (req, res) => {
  res.json({ customer: await getCustomer(req.params.id) });
});

router.post('/', (req, res) => {
  registerCustomer(req.body)
    .then((message) => res.json({ message }))
    .catch((error) => res.status(500).json({ error }));
});

module.exports = router;
