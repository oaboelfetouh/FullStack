const { validationResult } = require("express-validator");

const { findCustomer, findProducts } = require("../utilities/find");

exports.viewProducts = async (req, res, next) => {
  try {
    const user = await findCustomer(req.userId);
    const products = await findProducts();

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
