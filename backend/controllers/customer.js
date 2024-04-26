const { validationResult } = require("express-validator");

const CairoCustomer = require("../models/cairo-customers");
const CairoProducts = require("../models/cairo-products");
const AlexCustomer = require("../models/alex-customers");
const AlexProducts = require("../models/alex-products");

exports.viewProducts = async (req, res, next) => {
  const { city, userId } = req;
  try {
    let user;
    if (city == "cairo") {
      user = await CairoCustomer.findById(userId);
    } else {
      user = await AlexCustomer.findById(userId);
    }
    if (!user) {
      const error = new Error("Not Authorized.");
      error.status = 403;
      throw error;
    }

    let products;
    if (city == "cairo") {
      products = await CairoProducts.find();
    } else {
      products = await AlexProducts.find();
    }

    res.status(200).json({
      message: "Products Fetched Successfuly.",
      products,
    });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
};
