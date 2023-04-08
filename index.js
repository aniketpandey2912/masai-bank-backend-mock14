const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.listen(process.env.PORT, async () => {
  try {
    await mongoose.connect(process.env.mongoURL);
  } catch (err) {
    console.log("Can't connect to DB");
  }

  console.log("Server running at port", process.env.PORT);
});
