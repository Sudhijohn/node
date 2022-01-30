const express = require("express");
const bodyParser = require("body-parser");
const mongoConnect = require("./mongo");
const mongooseConnect = require("./mongoose");

const app = express();

app.use(bodyParser.json());

app.post("/products", mongooseConnect.createProduct);

app.get("/products", mongooseConnect.getProducts);

app.listen(3000);
