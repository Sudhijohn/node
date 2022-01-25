const fs = require("fs");

//Blocking Synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);
// const textOut = `This is what we know abbout avacado : ${textIn} \n Created on ${new Date()
//   .getTime()
//   .toString()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written");

//Non-blocking Asynchronous way.
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  if (err) console.log(err.message);
  fs.readFile(`./txt/${data}.txt`, "utf-8", (err, data2) => {
    if (err) console.log(err.message);
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      if (err) console.log(err.message);
      console.log(data3);
      fs.writeFile("./txt/final.txt", `${data2} \n${data3}`, "utf-8", (err) => {
        console.log("File has been written");
      });
    });
  });
});
console.log("Will read file");
