const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const { Schema } = mongoose;

const productsSchema = new Schema({
  productId: Number,
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
  },
  bestSeller: {
    type: Boolean,
    required: true,
  },
  photoURL: {
    type: String,
    required: true,
  },
});

productsSchema.plugin(AutoIncrement, { inc_field: 'productId' });
module.exports.Products = mongoose.model('products', productsSchema);
