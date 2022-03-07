const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const { Schema } = mongoose;

const customerSchema = new Schema(
  {
    customerId: {
      type: Number,
      unique: true,
    },
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumbers: {
      type: [Number],
      default: [],
    },
  },
  { timestamps: true }
);

customerSchema.plugin(AutoIncrement, { inc_field: 'customerId' });
module.exports.Customer = mongoose.model('customers', customerSchema);
