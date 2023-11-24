const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
//   customerID: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     unique: true,
//   },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  userType: { type: String, required: true },
  currentAccountStatus: { type: String, required: true },
  approvalStatus: { type: String, required: true },
});
const adminSchema = new mongoose.Schema({
  adminID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  adminName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});
const transactionSchema = new mongoose.Schema({
  Bill_PaymentID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  customerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  billTypeID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  serviceProviderID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  amount: { type: Number, required: true },
  paymentStatus: { type: String, required: true },
  date: { type: Date, default: Date.now },
});