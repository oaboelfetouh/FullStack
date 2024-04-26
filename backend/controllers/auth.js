const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const CairoSeller = require("../models/cairo-sellers");
const AlexSeller = require("../models/alex-sellers");
const CairoCustomer = require("../models/cairo-customers");
const AlexCustomer = require("../models/alex-customers");
const findUser = require("../utilities/findUsersByEmail");

exports.signup = async (req, res, next) => {
  const { username, password, email, city, userType } = req.body;
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      const error = new Error(
        "Data Validation Failed.Please Enter Valid Data."
      );
      error.status = 422;
      error.data = errors.array();
      throw error;
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    let user;
    if (userType === "seller" && city == "cairo") {
      user = new CairoSeller({
        username,
        password: hashedPassword,
        email,
        city,
        userType,
      });
    } else if (userType === "seller" && city == "alex") {
      user = new AlexSeller({
        username,
        password: hashedPassword,
        email,
        city,
        userType,
      });
    } else if (userType === "customer" && city == "cairo") {
      user = new CairoCustomer({
        username,
        password: hashedPassword,
        email,
        city,
        userType,
      });
    } else if (userType === "customer" && city == "alex") {
      user = new AlexCustomer({
        username,
        password: hashedPassword,
        email,
        city,
        userType,
      });
    }
    if (!user) {
      const error = new Error("Please Enter A Valid User Type.");
      error.status = 422;
      throw error;
    }
    const result = await user.save();
    res.status(201).json({
      message: "User Created Successfuly.",
    });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const { password, email } = req.body;
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      const error = new Error(
        "Data Validation Failed. Please Enter Valid Data."
      );
      error.status = 422;
      error.data = errors.array();
      throw error;
    }

    const user = await findUser(email);
    if (!user) {
      const error = new Error("User With That Email Is Not Found.");
      error.status = 404;
      throw error;
    }

    const passwordComparisonResult = await bcrypt.compare(
      password,
      user.password
    );
    if (!passwordComparisonResult) {
      const error = new Error(
        "Password Is Invalid. Please Enter A Valid Password."
      );
      error.status = 422;
      throw error;
    }

    const userType = user.userType;
    const token = jwt.sign(
      { email, userId: user._id.toString(), userType },
      "ThisIsASecretKeyYouShouldNotShareItWithAnyOne",
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "User Logged In Successfuly.",
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
