const mongoose = require("mongoose");

const AccountSchema = mongoose.Schema(
  {
    name: String,
    gender: String,
    dob: String,
    email: String,
    mobile: String,
    address: String,
    initialBalance: Number,
    adharNo: String,
    panNo: String,
    finalBalance: Number,
  },
  {
    versionKey: false,
  }
);

const AccountModel = mongoose.model("user", AccountSchema);

module.exports = {
  AccountModel,
};
