const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const { findByEmailAndType } = require("../utilities/find");
const { createUser } = require("../utilities/create");
const { checkValidation } = require("../utilities/check");

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);
  try {
    checkValidation(errors);
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const result = await createUser(req, hashedPassword);

    res.status(201).json({
      message: "User Created Successfuly.",
      user: result._doc,
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
    checkValidation(errors);

    const user = await findByEmailAndType(email, userType);

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
