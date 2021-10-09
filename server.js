// Environment variables
require('dotenv').config();

// Server variables
const express = require('express');
const app = express();

// Connect to database
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API Routes
const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

app.listen(process.env.PORT);
