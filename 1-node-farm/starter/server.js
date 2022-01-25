const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end("Hello from the server");
});

const port = 777;

server.listen(port, "127.0.0.1", () => {
  console.log("Server up and running in port 777");
});
