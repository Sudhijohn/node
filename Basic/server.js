const express = require("express");
const cors = require("cors");
const dummyData = require("./dummyData");

const app = express();

const tasks = [];

app.use(cors());
app.use(express.json({
	type: "*/*"
}));

app.get("/products", function (req, res) {
	res.json(dummyData.products);
});

app.get("/cartitems", function (req, res) {
	res.json(dummyData.cart);
});

app.post("/cartitems", function (req, res) {
	console.log(req.body);
});
app.put("/cartitems", function (req, res) {
	res.send({
		status: "SUCCESS"
	});
});

app.post("/tasks", function (req, res) {
	const data = {...req.body,
		id: Math.floor(Math.random() * 100)
	}
	tasks.push(req.body);
	res.send({
		status: "SUCCESS"
	});
});

app.get("/tasks", function (req, res) {
	res.json(tasks);
});

app.listen(3001);
console.log("Server running on port 3001");