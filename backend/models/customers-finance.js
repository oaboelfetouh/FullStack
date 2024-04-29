const { Schema, model } = require("mongoose");
const customersFinanceSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "AlexCustomers" || "CairoCustomers",
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
    // cart: [
    //   {
    //     productId: {
    //       reqiured: true,
    //       type: Schema.Types.ObjectId,
    //       ref: "Products",
    //     },
    //     quantity: { reqiured: true, type: Number },
    //   },
    // ],
  },
  { timestamps: true }
);
module.exports = model("CustomersFinance", customersFinanceSchema);
