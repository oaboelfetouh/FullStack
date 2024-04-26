const { Schema, model } = require("mongoose");
const alexSellersFinanceSchema = new Schema(
  {
    alexSeller: {
      type: Schema.Types.ObjectId,
      ref: "AlexSeller",
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
  },
  { timestamps: true }
);
module.exports = model("AlexSellersFinance", alexSellersFinanceSchema);
