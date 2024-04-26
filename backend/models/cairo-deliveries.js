const { Schema, model } = require("mongoose");
const cairoDeliveriesSchema = new Schema(
  {
    cairoCustomers: {
      type: Schema.Types.ObjectId,
      ref: "CairoCustomers",
      reqiured: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("CairoDeliveries", cairoDeliveriesSchema);
