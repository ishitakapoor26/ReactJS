// In order to use a particular module, it needs to be required, like below line of code: In order to read and write files we need modules to get our job done, thus we required 'fs' module.

const fs = require("fs");

// Not specifying utf-8 will give you a buffer error

// Synchronous or blocking
const textIn = fs.readFileSync("./input.txt", "utf-8");
console.log(textIn);

fs.writeFileSync("./output.txt", textIn);
console.log("Text written in output file.");
// // *

// Asynchronous or non-blocking

fs.readFile("./start.txt", "utf-8", (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});

fs.writeFile("./start.txt", `Testing null error`, (err) => {
  console.log(err);
});
