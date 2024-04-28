const CairoSeller = require("../models/cairo-sellers");
const AlexSeller = require("../models/alex-sellers");
const CairoCustomer = require("../models/cairo-customers");
const AlexCustomer = require("../models/alex-customers");
const Product = require("../models/products");

deleteUser = async function (userId) {
  let user;
  user = await CairoSeller.findByIdAndDelete(userId);
  if (!user) {
    user = await AlexSeller.findByIdAndDelete(userId);
  }
  if (!user) {
    user = await CairoCustomer.findByIdAndDelete(userId);
  }
  if (!user) {
    user = await AlexCustomer.findByIdAndDelete(userId);
  }
};

deleteProduct = async function (productId) {
  await Product.findByIdAndDelete(productId);
};

module.exports = { deleteUser, deleteProduct };
