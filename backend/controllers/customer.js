const { validationResult } = require("express-validator");

const {
  findCustomer,
  findProducts,
  findProduct,
} = require("../utilities/find");
const { updateCart } = require("../utilities/update");

exports.viewProducts = async (req, res, next) => {
  try {
    //const user = await findCustomer(req.userId);
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

exports.addToCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    const user = await findCustomer(req.userId);
    const product = await findProduct(productId);

    if (product.availableQuantity == 0) {
      res.status(400).json({
        message: "This product has no available quantity.",
      });
    } else {
      await updateCart(req, user);
      product.availableQuantity -= Number(quantity);
      await product.save();

      res.status(200).json({
        message: "Product is added to cart Successfuly.",
      });
    }
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
};

exports.viewCart = async (req, res, next) => {
  try {
    const user = await findCustomer(req.userId);
    //const cart = await findCart(user);

    res.status(200).json({
      message: "Cart Fetched Successfuly.",
      cart: user.cart,
    });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
};
