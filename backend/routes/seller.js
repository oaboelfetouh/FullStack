const { Router } = require("express");
const { body } = require("express-validator");

const isAuth = require("../middlewares/is-auth");
const sellerController = require("../controllers/seller");

const router = Router();
//router.post('/product', isAuth, sellerController.addProduct);
//router.get('/product/:productId', isAuth, sellerController.viewProduct);
//router.delete('/product/:productId', isAuth, sellerController.deleteProduct);
// router.put('/product/:productId', isAuth, sellerController.editProduct);
module.exports = router;
