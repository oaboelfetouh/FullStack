const { Schema, model } = require("mongoose");
const cairoCustomersSchema = new Schema(
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
    cart: [
      {
        productId: {
          reqiured: true,
          type: Schema.Types.ObjectId,
          ref: "Products",
        },
        quantity: { reqiured: true, type: Number },
      },
    ],
  },
  { timestamps: true }
);
module.exports = model("CairoCustomers", cairoCustomersSchema);
