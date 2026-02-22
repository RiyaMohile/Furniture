const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose.connect("mongodb+srv://riyamohile812_db_user:9tjaGlWOrIDzJX2Y@cluster0.egcpokb.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB Connected"));

const products = [
  {
    title: "Syltherine",
    slug: "syltherine",
    description: "Stylish wooden chair",
    price: 250000,
    src: "/photos/home/product1.png"
  },
  {
    title: "Lolito",
    slug: "lolito",
    description: "Luxury big sofa",
    price: 700000,
    src: "/photos/home/product3.png"
  },
  {
    title: "Leviosa",
    slug: "leviosa",
    description: "Comfortable modern chair",
    price: 150000,
    src: "/photos/home/product2.png"
  },
  {
    title: "Respira",
    slug: "respira",
    description: "Outdoor bar table",
    price: 500000,
    src: "/photos/home/product4.png"
  }
];

const seedDB = async () => {
  await Product.deleteMany();
  await Product.insertMany(products);
  console.log("Products Inserted");
  process.exit();
};

seedDB();