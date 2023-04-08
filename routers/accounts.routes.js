const express = require("express");
const accountsRouter = express.Router();

accountsRouter.get("/", async (req, res) => {
  try {
    res.send({ mssg: "All accounts" });
  } catch (err) {
    res.send({ mssg: "Something went wrong", err: err.message });
  }
});

accountsRouter.post("/openAccount", async (req, res) => {
  try {
    res.send({ mssg: "Account opened successfully" });
  } catch (err) {
    res.send({ mssg: "Something went wrong", err: err.message });
  }
});

accountsRouter.patch("/updateKYC/:id", async (req, res) => {
  try {
    res.send({ mssg: "Updated KYC successfully" });
  } catch (err) {
    res.send({ mssg: "Something went wrong", err: err.message });
  }
});

accountsRouter.patch("/depositMoney/:id", async (req, res) => {
  try {
    res.send({ mssg: "Money deposited successfully" });
  } catch (err) {
    res.send({ mssg: "Something went wrong", err: err.message });
  }
});

accountsRouter.patch("/withdrawMoney/:id", async (req, res) => {
  try {
    res.send({ mssg: "Money withdrawl successfully" });
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
  try {
    res.send({ mssg: "Account closed" });
  } catch (err) {
    res.send({ mssg: "Something went wrong", err: err.message });
  }
});

module.exports = {
  accountsRouter,
};
