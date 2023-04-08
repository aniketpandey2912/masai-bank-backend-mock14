const express = require("express");
const { AccountModel } = require("../models/openAccount.model");
const accountsRouter = express.Router();

accountsRouter.get("/", async (req, res) => {
  try {
    res.send({ mssg: "All accounts" });
  } catch (err) {
    res.send({ mssg: "Something went wrong", err: err.message });
  }
});

accountsRouter.post("/openAccount", async (req, res) => {
  const payload = req.body;
  payload.finalBalance = payload.initialBalance;
  console.log(payload);
  try {
    let allUsers = await AccountModel.find({
      email: payload.email,
      panNo: payload.panNo,
    });

    if (allUsers.length !== 0) {
      res.send({ mssg: "Already have an account", user: allUsers[0] });
    } else {
      let user = new AccountModel(payload);
      await user.save();
      let userWithID = await AccountModel.find({
        email: payload.email,
        panNo: payload.panNo,
      });
      res.send({ mssg: "Account opened successfully", user: userWithID });
    }
  } catch (err) {
    res.send({ mssg: "Something went wrong", err: err.message });
  }
});

accountsRouter.patch("/updateKYC/:id", async (req, res) => {
  let updates = req.body;
  let ID = req.params.id;
  try {
    await AccountModel.findByIdAndUpdate({ _id: ID }, updates);
    res.send({ mssg: "Updated KYC successfully" });
  } catch (err) {
    res.send({ mssg: "Something went wrong", err: err.message });
  }
});

accountsRouter.patch("/depositMoney/:id", async (req, res) => {
  let deposit = req.body.deposit;
  let ID = req.params.id;
  try {
    let user = await AccountModel.findById({ _id: ID });
    let updatedBalance = { finalBalance: user.finalBalance + deposit };
    await AccountModel.findByIdAndUpdate({ _id: ID }, updatedBalance);
    res.send({ mssg: "Money deposited successfully" });
  } catch (err) {
    res.send({ mssg: "Something went wrong", err: err.message });
  }
});

accountsRouter.patch("/withdrawMoney/:id", async (req, res) => {
  let withdrawl = req.body.withdrawl;
  let ID = req.params.id;
  try {
    let user = await AccountModel.findById({ _id: ID });
    if (user.finalBalance >= withdrawl) {
      let updatedBalance = { finalBalance: user.finalBalance - withdrawl };
      await AccountModel.findByIdAndUpdate({ _id: ID }, updatedBalance);
      res.send({ mssg: "Money withdrawl successfull" });
    } else {
      res.send({ mssg: "Don't have sufficient balance", status: false });
    }
  } catch (err) {
    res.send({ mssg: "Something went wrong", err: err.message });
  }
});

accountsRouter.patch("/transferMoney/:id", async (req, res) => {
  try {
    res.send({ mssg: "Money transfered successfully" });
  } catch (err) {
    res.send({ mssg: "Something went wrong", err: err.message });
  }
});

accountsRouter.patch("/printStatement/:id", async (req, res) => {
  try {
    res.send({ mssg: "Account statement printed" });
  } catch (err) {
    res.send({ mssg: "Something went wrong", err: err.message });
  }
});

accountsRouter.delete("/closeAccount/:id", async (req, res) => {
  let ID = req.params.id;
  try {
    await AccountModel.findByIdAndDelete({ _id: ID });
    res.send({ mssg: "Account closed" });
  } catch (err) {
    res.send({ mssg: "Something went wrong", err: err.message });
  }
});

module.exports = {
  accountsRouter,
};
