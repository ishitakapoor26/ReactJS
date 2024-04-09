const http = require("http");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview");
  } else if (pathName === "/product") {
    res.end("This is the product catalog page");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      Error: "Testing manual errors",
    });
    res.end("<h1> Page not found! </h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests!");
});
