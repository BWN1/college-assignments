const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const { Schema } = mongoose;

const productsSchema = new Schema({
  _id: Number,
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: false,
    default: 0,
  },
  bestSeller: {
    type: Boolean,
    required: true,
    default: false,
  },
  photoURL: {
    type: String,
    required: true,
  },
});

productsSchema.plugin(AutoIncrement);
module.exports.Products = mongoose.model('products', productsSchema);
