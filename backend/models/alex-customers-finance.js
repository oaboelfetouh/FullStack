const { Schema, model } = require("mongoose");
const alexCustomersFinanceSchema = new Schema(
  {
    alexCustomers: {
      type: Schema.Types.ObjectId,
      ref: "AlexCustomers",
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
module.exports = model("AlexCustomersFinance", alexCustomersFinanceSchema);
