const mongoose = require("mongoose");

const Product = require("./models/products");

mongoose
  .connect(
    `mongodb+srv://sudhijohn:gts9pYq4077qDIg1@cluster0.ebshz.mongodb.net/products_test?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection Failed");
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  try {
    const result = await createdProduct.save();
    res.json({ result });
  } catch (error) {
    return res.json({ error: "Could not perform the operation" });
  }
};

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find().exec();
    res.json({ products });
  } catch (error) {
    return res.json({ error: "Could not perform fetch Operation" });
  }
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
