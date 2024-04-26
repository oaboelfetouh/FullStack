const { Schema, model } = require("mongoose");
const alexSellersSchema = new Schema(
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
  },
  { timestamps: true }
);
module.exports = model("AlexSellers", alexSellersSchema);
