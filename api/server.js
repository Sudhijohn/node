const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");
const userRoutes = require("./routes/users-routes");

const app = express();

app.use("/api/places", placesRoutes);
app.use("/api/users", userRoutes);
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ error: error.message || "An unknown error occured" });
});

app.listen(5000);

console.log("App started at port 5000");