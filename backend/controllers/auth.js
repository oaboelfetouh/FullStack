const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const Seller = require('../models/seller');
const Customer = require('../models/customer');

exports.signup = async (req, res, next) => {
  const { username, password, email, city, address, phone, userType } =
    req.body;
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      const error = new Error(
        'Data Validation Failed.Please Enter Valid Data.'
      );
      error.status = 422;
      error.data = errors.array();
      throw error;
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    let user;
    if (userType === 'seller') {
      user = new Seller({
        username,
        password: hashedPassword,
        email,
        city,
      });
    } else if (userType === 'customer') {
      user = new Customer({
        username,
        password: hashedPassword,
        email,
        city,
        address,
        phone,
      });
    }
    if (!user) {
      const error = new Error('Please Enter A Valid User Type.');
      error.status = 422;
      throw error;
    }
    const result = await user.save();
    res.status(201).json({
      message: 'User Created Successfuly.',
      user: { ...result._doc, password: undefined },
    });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
};
exports.login = async (req, res, next) => {
  const { password, email, userType } = req.body;
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      const error = new Error(
        'Data Validation Failed. Please Enter Valid Data.'
      );
      error.status = 422;
      error.data = errors.array();
      throw error;
    }

    let user;
    if (userType === 'seller') {
      user = await Seller.findOne({ email });
    } else if (userType === 'customer') {
      user = await Customer.findOne({ email });
    }
    if (!user) {
      const error = new Error('User With That Email Is Not Found.');
      error.status = 404;
      throw error;
    }
    const passwordComparisonResult = await bcrypt.compare(
      password,
      user.password
    );
    if (!passwordComparisonResult) {
      const error = new Error(
        'Password Is Invalid. Please Enter A Valid Password.'
      );
      error.status = 422;
      throw error;
    }
    const token = jwt.sign(
      { email, userId: user._id.toString(), userType },
      'ThisIsASecretKeyYouShouldNotShareItWithAnyOne',
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'User Logged In Successfuly.',
      token,
      tokenExpiryDate: Date.now() + 3600000,
    });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
};
