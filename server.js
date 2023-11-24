// server.js
const express = require("express");
const mongoose = require("mongoose");
const {
  CustomerModel,
  AdminModel,
  TransactionModel,
  BillTypeModel,
  ServiceProviderModel,
} = require("./models/productModel");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello NODE API");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog, My name is Janith");
});

app.get("/customers", async (req, res) => {
  try {
    const customers = await CustomerModel.find({});
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/customers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await CustomerModel.findById(id);
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
