const { Schema, model } = require('mongoose');
const sellerSchema = new Schema(
  {
    username: {
      type: String,
      reqiured: true,
    },
    password: {
      type: String,
      reqiured: true,
    },
    email: {
      type: String,
      reqiured: true,
    },
    city: {
      type: String,
      reqiured: true,
    },

    balance: {
      type: Number,
      default: 0,
    },
    cardInfo: {
      type: Object,
    },
  },
  { timestamps: true }
);
module.exports = model('Seller', sellerSchema);
