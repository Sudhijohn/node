const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const port = 7000;
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);

const server = http.createServer((req, res) => {
  console.log(req.url);
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(tempOverview);
  } else if (pathName === "/product") {
    res.end("This is the products");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page not found");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log("Server is up at runnig at port :", port);
});
