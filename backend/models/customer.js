const { Schema, model } = require('mongoose');
const customerSchema = new Schema(
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
    address: {
      type: String,
    },
    phone: {
      type: Number,
    },
    balance: {
      type: Number,
      default: 0,
    },
    cardInfo: {
      type: Object,
    },
    cart: [
      {
        productId: {
          reqiured: true,
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
        quantity: { reqiured: true, type: Number },
      },
    ],
  },
  { timestamps: true }
);
module.exports = model('Customer', customerSchema);
