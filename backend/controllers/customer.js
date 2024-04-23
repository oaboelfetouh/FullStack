const { validationResult } = require('express-validator');

const Customer = require('../models/customer');
const Product = require('../models/product');

exports.viewProducts = async (req, res, next) => {
  const { userId } = req;
  try {
    user = await Customer.findById(userId);

    if (!user) {
      const error = new Error('Not Authorized.');
      error.status = 403;
      throw error;
    }
    const products = await Product.find();
    res.status(200).json({
      message: 'Products Fetched Successfuly.',
      products,
    });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
};
