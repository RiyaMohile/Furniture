const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      },
      quantity: Number
    }
  ],
  totalAmount: Number,
  billingDetails: {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String
  },
  orderDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", orderSchema);