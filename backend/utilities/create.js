const CairoSeller = require("../models/cairo-sellers");
const AlexSeller = require("../models/alex-sellers");
const CairoCustomer = require("../models/cairo-customers");
const AlexCustomer = require("../models/alex-customers");
const Product = require("../models/products");

createUser = async function (req, hashedPassword) {
  const { username, email, city, userType } = req.body || req;

  let user;
  if (userType === "seller" && city == "cairo") {
    user = new CairoSeller({
      username,
      password: hashedPassword,
      email,
      city,
    });
  } else if (userType === "seller" && city == "alex") {
    user = new AlexSeller({
      username,
      password: hashedPassword,
      email,
      city,
    });
  } else if (userType === "customer" && city == "cairo") {
    user = new CairoCustomer({
      username,
      password: hashedPassword,
      email,
      city,
    });
  } else if (userType === "customer" && city == "alex") {
    user = new AlexCustomer({
      username,
      password: hashedPassword,
      email,
      city,
    });
  }
  if (!user) {
    const error = new Error("Please Enter A Valid User Type.");
    error.status = 422;
    throw error;
  }
  return await user.save();
};

createProduct = async function (req) {
  const { userId } = req;
  const { name, description, price, availableQuantity, category } = req.body;

  const product = new Product({
    name,
    description,
    price,
    availableQuantity,
    category,
    seller: userId,
    // imageUrl: "url",
  });
  return await product.save();
};

module.exports = { createUser, createProduct };
