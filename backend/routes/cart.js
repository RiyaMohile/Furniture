const express = require("express");
const Cart = require("../models/cart");
const authMiddleware = require("../middleware/middleware");

const router = express.Router();

// Add to Cart
router.post("/add", authMiddleware, async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const cartItem = await Cart.create({
      user: req.user,  
      product: productId,
      quantity
    });

    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Cart Items
router.get("/", authMiddleware, async (req, res) => {
  try {
    const cartItems = await Cart.find({ user: req.user })
      .populate("product");

    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Quantity
router.put("/:id", async (req, res) => {
  try {
    const { quantity } = req.body;

    const updated = await Cart.findByIdAndUpdate(
      req.params.id,
      { quantity },
      { new: true }
    );

    return res.json(updated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Delete Item
router.delete("/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    return res.json({ message: "Deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;