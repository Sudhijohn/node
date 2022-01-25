const fs = require("fs");
const https = require("https");
const app = require("./app/app");

if (process.env.NODE_ENV !== "production") {
  //For Local
  var options = {
    key: fs.readFileSync(__dirname + "/localhost.key"),
    cert: fs.readFileSync(__dirname + "/localhost.cert"),
    requestCert: false,
    rejectUnauthorized: false,
  };

  https
    .createServer(options, function (req, res) {
      console.log(options);
      app.handle(req, res);
    })
    .listen(4000, function () {
      console.log("Server started at - https://localhost:4000");
    });
} else {
  //For Server
  app.listen(process.env.PORT);
}
