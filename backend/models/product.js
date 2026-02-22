const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  slug: String,
  description: String,
  price: Number,
  src: String
});

module.exports = mongoose.model("Product", productSchema);