const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const placesRoutes = require("./routes/places-routes");
const userRoutes = require("./routes/users-routes");
const {
  errorHandling,
  routeErrorHandler,
} = require("./services/errorHandling");
const { mongoDbUrl } = require("./dbsettings");

const app = express();

app.use(bodyParser.json());

app.use("/api/places", placesRoutes);
app.use("/api/users", userRoutes);
app.use(routeErrorHandler);
app.use(errorHandling);

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log("Database connection Error", err);
  });

console.log("App started at port 5000");
