const mongoose = require("mongoose");

const KYCSchema = mongoose.Schema(
  {
    name: String,
    dob: String,
    email: String,
    mobile: String,
    adharNo: String,
    panNo: String,
  },
  {
    versionKey: false,
  }
);

const KYCModel = mongoose.model("user", KYCSchema);

module.exports = {
  KYCModel,
};
