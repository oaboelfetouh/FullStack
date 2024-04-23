const { validationResult } = require('express-validator');

const Seller = require('../models/seller');
const Customer = require('../models/customer');

exports.getUserProfile = async (req, res, next) => {
  const { userId, userType } = req;
  try {
    let user;
    if (userType.trim().toLowerCase() === 'seller') {
      user = await Seller.findById(userId);
    } else if (userType.trim().toLowerCase() === 'customer') {
      user = await Customer.findById(userId);
    }
    if (!user) {
      const error = new Error('User Not Found.');
      error.status = 404;
      throw error;
    }
    res.status(200).json({
      message: 'User Found Succesfuly',
      user: { ...user, password: undefined },
    });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
};
exports.editUserProfile = async (req, res, next) => {
  const { username, city, address, phone } = req.body;
  const { userId, userType } = req;
  try {
    let user;
    if (userType.trim().toLowerCase() === 'seller') {
      user = await Seller.findById(userId);
    } else {
      user = await Customer.findById(userId);
    }
    if (!user) {
      const error = new Error('User Not Found.');
      error.status = 404;
      throw error;
    }

    user.username = username;
    user.city = city;
    user.address = address;
    user.phone = phone;
    const savedUser = await user.save();
    res.status(200).json({
      message: 'User Updated Succesfuly',
      user: { ...savedUser, password: undefined },
    });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
};
