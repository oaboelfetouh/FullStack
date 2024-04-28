checkAuth = function (sellerId, userId) {
  if (sellerId !== userId) {
    const error = new Error("Not Authorized.");
    error.status = 403;
    throw error;
  }
};

checkValidation = function (errors) {
  if (!errors.isEmpty()) {
    const error = new Error("Data Validation Failed.Please Enter Valid Data.");
    error.status = 422;
    error.data = errors.array();
    throw error;
  }
};

module.exports = { checkAuth, checkValidation };
