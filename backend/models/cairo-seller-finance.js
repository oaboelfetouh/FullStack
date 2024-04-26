const { Schema, model } = require("mongoose");
const cairoSellersFinanceSchema = new Schema(
  {
    cairoSeller: {
      type: Schema.Types.ObjectId,
      ref: "CairoSeller",
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
module.exports = model("CairoSellersFinance", cairoSellersFinanceSchema);
