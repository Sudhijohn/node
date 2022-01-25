const http = require("http");

const form = `<form method="POST">
                <input type='text' placeholder="Enter Name" name="username" >
                <button>Create User</button>
               </form>
            `;

const handlerRequest = (req, res) => {
  if (req.method === "POST") {
    handlePostRequest(req, res);
  } else {
    res.setHeader("Content-Type", "text/html");
    res.end(form);
  }
};

const handlePostRequest = (req, res) => {
  let body = "";
  req.on("data", (data) => {
    body += data;
  });
  req.on("end", () => {
    const [, userName] = body.split("=");
    res.end(`<h1>Hello ${userName}</h1>`);
  });
};

const server = http.createServer((req, res) => {
  console.log("Request Received");
  //console.log(req.method, req.url);
  handlerRequest(req, res);
});

server.listen(5000);
