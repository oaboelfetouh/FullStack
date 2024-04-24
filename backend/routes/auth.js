const { Router } = require('express');
const { body } = require('express-validator');

const authController = require('../controllers/auth');
const Seller = require('../models/seller');
const Customer = require('../models/customer');

const router = Router();
router.post(
  '/signup',
  [
    body('username')
      .trim()
      .isLength({ min: 5, max: 25 })
      .isAlphanumeric()
      .withMessage(
        'please enter a valid username between 5 and 25 characters with no spaces and only numbers and alphabetic characters'
      ),
    body('city')
      .trim()
      .isLength({ min: 3, max: 25 })
      .isAlphanumeric()
      .withMessage(
        'please enter a valid city between 3 and 25 characters with no spaces and only numbers and alphabetic characters'
      ),
    body('address')
      .trim()
      .isLength({ min: 3, max: 100 })
      .isString()
      .withMessage(
        'please enter a valid address that is a string between 3 and 100 characters'
      ),
    body('userType')
      .trim()
      .toLowerCase()
      .isIn(['seller', 'customer'])
      .withMessage('please enter a valid user type either seller or customer'),
    body('phone')
      .trim()
      .isNumeric()
      .isLength({ min: 10, max: 20 })
      .withMessage(
        'please enter a valid phone number that contain only numbers'
      ),
    body('password')
      .trim()
      .isString()
      .isLength({ min: 10, max: 25 })
      .withMessage(
        'please enter a valid password that is a string between 10 and 25 characters'
      ),
    body('email')
      .trim()
      .isEmail()
      .withMessage('please enter a valid email')
      .custom((value, { req }) => {
        if (req.body.userType === 'seller') {
          return Seller.findOne({ email: value }).then((user) => {
            if (user) {
              return Promise.reject('Email Already exists');
            }
          });
        } else if (req.body.userType === 'customer') {
          return Customer.findOne({ email: value }).then((user) => {
            if (user) {
              return Promise.reject('Email Already exists');
            }
          });
        }
      })
      .normalizeEmail(),
  ],
  authController.signup
);
router.post(
  '/login',
  [
    body('userType')
      .trim()
      .toLowerCase()
      .isIn(['seller', 'customer'])
      .withMessage('please enter a valid user type either seller or customer'),
    body('password')
      .trim()
      .isString()
      .isLength({ min: 10, max: 25 })
      .withMessage(
        'please enter a valid password that is a string between 10 and 25 characters'
      ),

    body('email')
      .trim()
      .isEmail()
      .withMessage('please enter a valid email')
      .normalizeEmail(),
  ],
  authController.login
);

module.exports = router;
