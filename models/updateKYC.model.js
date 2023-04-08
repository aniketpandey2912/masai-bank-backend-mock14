const mongoose = require("mongoose");

const updateKYCSchema = mongoose.Schema({
  name: String,
  dob: String,
  email: String,
  mobile: String,
  adharNo: String,
  panNo: String,
});

const UpdateKYCModel = mongoose.model("user", updateKYCSchema);

module.exports = {
  UpdateKYCModel,
};
