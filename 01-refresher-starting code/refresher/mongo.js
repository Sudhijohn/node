const MongoClient = require("mongodb").MongoClient;

const url = `mongodb+srv://sudhijohn:gts9pYq4077qDIg1@cluster0.ebshz.mongodb.net/products_test?retryWrites=true&w=majority`;

const createProduct = async (req, res, next) => {
  console.log(req.body);
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = await db.collection("products").insertOne(newProduct);
  } catch (error) {
    return res.json({ error: "Could not store data" });
  }
  client.close();

  res.json({ newProduct });
};

const getProducts = async (req, res, next) => {
  const client = new MongoClient(url);
  let products;
  try {
    await client.connect();
    const db = client.db();
    products = await db.collection("products").find().toArray();
  } catch (error) {
    return res.json({ error: "Could not fetch product" });
  }
  client.close();

  res.json({ products });
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
