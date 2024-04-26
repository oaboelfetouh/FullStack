const { Schema, model } = require("mongoose");
const alexDeliveriesSchema = new Schema(
  {
    alexCustomers: {
      type: Schema.Types.ObjectId,
      ref: "AlexCustomers",
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
module.exports = model("AlexDeliveries", alexDeliveriesSchema);
