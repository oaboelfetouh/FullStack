// const { validationResult } = require("express-validator");

// const Seller = require("../models/seller");
// const Product = require("../models/product");
// exports.viewProduct = async (req, res, next) => {
//   const { userId } = req;
//   const { productId } = req.params;

//   try {
//     user = await Seller.findById(userId);

//     if (!user) {
//       const error = new Error("Not Authorized.");
//       error.status = 403;
//       throw error;
//     }
//     const product = await Product.findById(productId);
//     if (!product) {
//       const error = new Error("Product Not Found.");
//       error.status = 404;
//       throw error;
//     }
//     if (product.seller.toString() !== userId) {
//       const error = new Error("Not Authorized.");
//       error.status = 403;
//       throw error;
//     }
//     res.status(200).json({
//       message: "Product Details Fetched Successfuly.",
//       product,
//     });
//   } catch (err) {
//     if (!err.status) {
//       err.status = 500;
//     }
//     next(err);
//   }
// };
// exports.deleteProduct = async (req, res, next) => {
//   const { userId } = req;
//   const { productId } = req.params;

//   try {
//     user = await Seller.findById(userId);

//     if (!user) {
//       const error = new Error("Not Authorized.");
//       error.status = 403;
//       throw error;
//     }
//     const product = await Product.findById(productId);
//     if (!product) {
//       const error = new Error("Product Not Found.");
//       error.status = 404;
//       throw error;
//     }
//     if (product.seller.toString() !== userId) {
//       const error = new Error("Not Authorized.");
//       error.status = 403;
//       throw error;
//     }
//     await Product.findByIdAndDelete(productId);

//     res.status(200).json({
//       message: "Product Deleted Successfuly.",
//     });
//   } catch (err) {
//     if (!err.status) {
//       err.status = 500;
//     }
//     next(err);
//   }
// };
// exports.addProduct = async (req, res, next) => {
//   const { userId } = req;
//   const { name, description, price, availableQuantity, category } = req.body;

//   const errors = validationResult(req);
//   try {
//     if (!errors.isEmpty()) {
//       const error = new Error(
//         "Data Validation Failed.Please Enter Valid Data."
//       );
//       error.status = 422;
//       error.data = errors.array();
//       throw error;
//     }
//     user = await Seller.findById(userId);

//     if (!user) {
//       const error = new Error("Not Authorized.");
//       error.status = 403;
//       throw error;
//     }
//     if (!req.file) {
//       const error = new Error("Please Add An Image File.");
//       error.status = 422;
//       throw error;
//     }
//     const imageUrl = req.file.path;
//     const product = new Product({
//       name,
//       description,
//       price,
//       availableQuantity,
//       category,
//       seller: userId,
//       imageUrl,
//     });
//     const result = await product.save();
//     res.status(201).json({
//       message: "Product Added Successfuly.",
//       product: result._doc,
//     });
//   } catch (err) {
//     if (!err.status) {
//       err.status = 500;
//     }
//     next(err);
//   }
// };

// exports.editProduct = async (req, res, next) => {
//   const { userId } = req;
//   const { productId } = req.params;
//   const { name, description, price, availableQuantity, category } = req.body;

//   const errors = validationResult(req);
//   try {
//     if (!errors.isEmpty()) {
//       const error = new Error(
//         "Data Validation Failed.Please Enter Valid Data."
//       );
//       error.status = 422;
//       error.data = errors.array();
//       throw error;
//     }
//     let user;
//     user = await Seller.findById(userId);
//     // Checking Authorization
//     if (!user) {
//       const error = new Error("Not Authorized.");
//       error.status = 403;
//       throw error;
//     }
//     let product = await Product.findById(productId);
//     //Checking if this Product is valid
//     if (!product) {
//       const error = new Error("Product Not Found.");
//       error.status = 404;
//       throw error;
//     }
//     //Checking if this product is authorized to current seller
//     if (product.seller.toString() !== userId) {
//       const error = new Error("Not Authorized.");
//       error.status = 403;
//       throw error;
//     }
//     //checking that ImageURL field is not empty
//     if (req.file != undefined) {
//       const imageUrl = req.file.path;
//       product.imageUrl = imageUrl;
//     }

//     //assignning req body to Product attribute
//     product.name = name;
//     product.description = description;
//     product.price = price;
//     product.availableQuantity = availableQuantity;
//     product.category = category;

//     const editedproduct = await product.save();
//     res.status(200).json({
//       message: "Product Updated Succesfuly",
//       product: { ...editedproduct._doc },
//     });
//   } catch (err) {
//     if (!err.status) {
//       err.status = 500;
//     }
//     next(err);
//   }
// };
