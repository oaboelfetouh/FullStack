const { Schema, model } = require("mongoose");
const cairoProductsSchema = new Schema(
  {
    name: {
      type: String,
      reqiured: true,
    },
    cairoSeller: {
      type: Schema.Types.ObjectId,
      ref: "CairoSellers",
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
module.exports = model("CairoProducts", cairoProductsSchema);
