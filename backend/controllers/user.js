const { validationResult } = require("express-validator");

const { updateUser } = require("../utilities/update");
const { findUser } = require("../utilities/find");
const { checkValidation } = require("../utilities/check");

exports.getUserProfile = async (req, res, next) => {
  try {
    const user = await findUser(req.userId);

    res.status(200).json({
      message: "User Found Succesfuly",
      user: { ...user._doc, password: undefined },
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

  const errors = validationResult(req);
  try {
    checkValidation(errors);

    const user = await findUser(req.userId);

    let updatedUser;
    if (user.city != city) {
      updatedUser = await updateUser(req, user);
    } else {
      user.username = username;
      //user.address = address;
      //user.phone = phone;
    }

    res.status(200).json({
      message: "User Updated Succesfuly",
      user: { ...updatedUser._doc, password: undefined },
    });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
};
