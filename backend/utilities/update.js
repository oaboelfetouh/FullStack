const { deleteUser } = require("./delete");

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

module.exports = {
  updateUser,
};
