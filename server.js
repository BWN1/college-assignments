// Environment variables
require('dotenv').config();

// Server variables
const express = require('express');
const app = express();
const PORT = 3000;

// Connect to database
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Parse responses to JSON
app.use(express.json());

// API Routes
const apiRoute = require('./routes/api');
app.use('/api', apiRoute);

app.listen(PORT);
