const CairoSeller = require("../models/cairo-sellers");
const AlexSeller = require("../models/alex-sellers");
const CairoCustomer = require("../models/cairo-customers");
const AlexCustomer = require("../models/alex-customers");

findUser = async function findUser(email) {
  let user;
  user = await CairoSeller.findOne({ email });
  if (!user) {
    user = await CairoCustomer.findOne({ email });
  }
  if (!user) {
    user = await AlexSeller.findOne({ email });
  }
  if (!user) {
    user = await AlexCustomer.findOne({ email });
  }
  return user;
};

module.exports = findUser;
