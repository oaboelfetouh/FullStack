const { deleteUser } = require("./delete");
const { findProduct } = require("./find");

updateUser = async function (req, user) {
  const { username, password, email } = user;
  const { city } = req.body;
  const { userId, userType } = req;
  const updatedUser = await createUser(
    {
      username,
      email,
      city,
      userType,
    },
    password
  );
  await deleteUser(userId);
  return updatedUser;
};

updateCart = async function (req, user) {
  const { productId, quantity } = req.body;
  const product = user.cart.find(
    (item) => item.productId.toString() === productId
  );

  if (!product) {
    user.cart.push({
      productId: productId,
      quantity: quantity,
    });
  } else {
    product.quantity += Number(quantity);
  }
  await user.save();
};

// updateQuantity = async function (req) {
//   const { productId, quantity } = req.body;

//   const product = await findProduct(productId);
//   product.availableQuantity -= quantity;
//   await product.save();
// };

module.exports = {
  updateUser,
  updateCart,
  //updateQuantity,
};
