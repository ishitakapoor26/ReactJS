const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1:
  // fs.readFile("input.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });

  // Solution 2:
  // const readable = fs.createReadStream("input.txt");
  // readable.on("data", (chunk) => {
  //   res.write(chunk);
  //   // response is writable
  // });
  // readable.on("end", () => {
  //   res.end();
  // });
  // readable.on("error", (err) => {
  //   console.log(err);
  //   res.statusCode(500);
  //   res.end("File not found");
  // });

  // Solution 3:

  const readable = fs.createReadStream("input.txt");
  readable.pipe(res);
});

// Here problem of back-pressure occurs where response is slow in comparison to request/data received.

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to server at  port 8000");
});
