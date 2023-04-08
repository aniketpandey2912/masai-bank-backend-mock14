const mongoose = require("mongoose");

const openAccSchema = mongoose.Schema({
  name: String,
  gender: String,
  dob: String,
  email: String,
  mobile: String,
  address: String,
  initialBalance: Number,
  adharNo: String,
  panNo: String,
});

const OpenAccModel = mongoose.model("user", openAccSchema);

module.exports = {
  OpenAccModel,
};
