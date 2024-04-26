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
    userType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("CairoCustomers", cairoCustomersSchema);
