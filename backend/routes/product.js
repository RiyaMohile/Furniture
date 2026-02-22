const express = require("express");
const Product = require("../models/product");
const router = express.Router();

// Get Product by Slug
router.get("/:slug", async (req, res) => {
  try {
    const slug = req.params.slug.toLowerCase();

    const product = await Product.findOne({ slug });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;