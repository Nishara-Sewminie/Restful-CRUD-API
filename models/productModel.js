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
const billTypeSchema = new mongoose.Schema({
  billTypeID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  name: { type: String, required: true },
});
const serviceProviderSchema = new mongoose.Schema({
  serviceProviderID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  billTypeID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BillType",
    required: true,
  },
  adminID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  name: { type: String, required: true },
});
const CustomerModel = mongoose.model("Customer", customerSchema);
const AdminModel = mongoose.model("Admin", adminSchema);
const TransactionModel = mongoose.model("Transaction", transactionSchema);
const BillTypeModel = mongoose.model("BillType", billTypeSchema);
const ServiceProviderModel = mongoose.model(
  "ServiceProvider",
  serviceProviderSchema
);
module.exports = {
  CustomerModel,
  AdminModel,
  TransactionModel,
  BillTypeModel,
  ServiceProviderModel,
};
