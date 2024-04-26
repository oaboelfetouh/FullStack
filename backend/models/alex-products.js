const { Schema, model } = require("mongoose");
const alexProductsSchema = new Schema(
  {
    name: {
      type: String,
      reqiured: true,
    },
    alexSeller: {
      type: Schema.Types.ObjectId,
      ref: "AlexSellers",
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
    category: {
      type: String,
      reqiured: true,
    },
  },
  { timestamps: true }
);
module.exports = model("AlexProducts", alexProductsSchema);
