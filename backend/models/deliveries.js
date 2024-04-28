const { Schema, model } = require("mongoose");
const deliveriesSchema = new Schema(
  {
    alexCustomers: {
      type: Schema.Types.ObjectId,
      ref: "AlexCustomers" || "CairoCustomers",
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
module.exports = model("deliveries", deliveriesSchema);
