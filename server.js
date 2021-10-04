const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// API Routes
const apiRoute = require('./routes/api');
app.use('/api', apiRoute);

app.listen(PORT);
