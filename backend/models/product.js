const { Schema, model } = require('mongoose');
const productSchema = new Schema(
  {
    name: {
      type: String,
      reqiured: true,
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: 'Seller',
      reqiured: true,
    },
    description: {
      type: String,
      reqiured: true,
    },
    price: {
      type: Number,
      reqiured: true,
    },

    availableQuantity: {
      type: Number,
      reqiured: true,
    },
    imageUrl: {
      type: String,
      reqiured: true,
    },
    Category: {
      type: String,
      reqiured: true,
    },
  },
  { timestamps: true }
);
module.exports = model('Product', productSchema);
