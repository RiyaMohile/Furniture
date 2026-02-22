require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");
const authRoutes = require("./routes/auth");


const app = express();

app.use(cors());
app.use(express.json());


connectDB();

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});