require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { accountsRouter } = require("./routers/accounts.routes");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.use("/users", accountsRouter);

app.listen(process.env.PORT, async () => {
  try {
    await mongoose.connect(process.env.mongoURL);
    console.log("Connected to DB");
  } catch (err) {
    console.log("Can't connect to DB");
  }

  console.log("Server running at port", process.env.PORT);
});


// {
//     "name": "Anurag",
//    "gender": "Male",
//    "dob": "25/12/2023",
//    "email": "anurag@gmail.com",
//    "mobile": 9956470720,
//    "address": "Lucknow, India",
//    "initialBalance": 2000,
//    "adharNo": "11223345",
//    "panNo": "12345"
//  }
