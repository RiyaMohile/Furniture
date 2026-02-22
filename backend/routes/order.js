const express = require("express");
const Order = require("../models/order");
const Cart = require("../models/cart");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { billingDetails } = req.body;

    const cartItems = await Cart.find().populate("product");

    if (!cartItems.length) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const validItems = cartItems.filter(item => item.product);

    if (!validItems.length) {
      return res.status(400).json({ message: "No valid products in cart" });
    }

    const totalAmount = validItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );

    const order = await Order.create({
      items: validItems.map(item => ({
        product: item.product._id,
        quantity: item.quantity
      })),
      totalAmount,
      billingDetails
    });

    await Cart.deleteMany();

    return res.json(order);

  } catch (error) {
    console.error("ORDER ERROR:", error);  
    return res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("items.product", "title"); 

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;   