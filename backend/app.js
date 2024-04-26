const path = require("path");

const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");

// const CairoSeller = require("./models/cairo-sellers");
// const AlexSeller = require("./models/alex-sellers");
// const CairoCustomer = require("./models/cairo-customers");
// const AlexCustomer = require("./models/alex-customers");

// CairoSeller.createCollection().then(function (collection) {
//   console.log("CairoSeller is created!");
// });
// AlexSeller.createCollection().then(function (collection) {
//   console.log("CairoSeller is created!");
// });
// CairoCustomer.createCollection().then(function (collection) {
//   console.log("CairoSeller is created!");
// });
// AlexCustomer.createCollection().then(function (collection) {
//   console.log("CairoSeller is created!");
// });

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const sellerRoutes = require("./routes/seller");
const customerRoutes = require("./routes/customer");
const cors = require("./middlewares/CORS");
const errorHandler = require("./middlewares/error-handler");
const resourceNotFoundHandler = require("./middlewares/notfound");
const { storage } = require("./utilities/image-upload");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer({ storage }).single("image"));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(cors);
app.use("/auth", authRoutes);
app.use("/seller", sellerRoutes);
app.use("/customer", customerRoutes);
app.use(userRoutes);
app.use(resourceNotFoundHandler);
app.use(errorHandler);
mongoose
  .connect(
    "mongodb+srv://zeyad:6EwDCVKSbrowMQ7m@cluster0.jitwnwb.mongodb.net/distributed?retryWrites=true&w=majority&appName=Cluster0"
    //"mongodb://localhost:27017"
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("server started");
    });
  });
