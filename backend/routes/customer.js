const { Router } = require("express");
const { body } = require("express-validator");

const isAuth = require("../middlewares/is-auth");
const customerController = require("../controllers/customer");

const router = Router();
router.get("/products", customerController.viewProducts);
router.put("/cart", isAuth, customerController.addToCart);
router.get("/cart", isAuth, customerController.viewCart);
// router.post('/order', isAuth, customerController.createOrder);
// router.get('/orders', isAuth, customerController.viewOrders);

module.exports = router;
