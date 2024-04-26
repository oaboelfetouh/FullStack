const { Schema, model } = require("mongoose");
const cairoCustomersFinanceSchema = new Schema(
  {
    cairoCustomer: {
      type: Schema.Types.ObjectId,
      ref: "CairoCustomers",
      reqiured: true,
    },
    balance: {
      type: Number,
      default: 0,
    },
    cardInfo: {
      type: Object,
      reqiured: true,
    },
    cart: [
      {
        productId: {
          reqiured: true,
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: { reqiured: true, type: Number },
      },
    ],
  },
  { timestamps: true }
);
module.exports = model("CairoCustomersFinance", cairoCustomersFinanceSchema);
