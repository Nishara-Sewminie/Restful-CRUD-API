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

app.post("/customers", async (req, res) => {
  try {
    const customer = await CustomerModel(req.body);
    res.status(200).json(customer);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
app.get("/cc", (req, res) => {
  res.send("Hello");
});

// Similar CRUD routes for other entities (Admin, Transaction, BillType, ServiceProvider) can be added here.

mongoose
  .connect(
    "mongodb+srv://mania-99:1234@cluster0.3gclhdt.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3001, () => {
  console.log(`Node API app is running on port 3001`);
});
