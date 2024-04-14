const http = require("http");
const fs = require("fs");
const url = require("url");
const slugify = require("slugify");
const replaceTemplate = require("./modules.js/replaceTemplate");

const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`);
const tempCard = fs.readFileSync(`${__dirname}/templates/card.html`);
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`);
const dataObj = JSON.parse(data);

const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));
console.log(slugs);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const cardHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join("");

    const output = tempOverview
      .toString()
      .replace("{%PRODUCT_CARDS%}", cardHtml);
    res.end(output);
  } else if (pathname === "/product") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      Error: "Testing manual errors",
    });
    res.end("<h1> Page not found! </h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server started!");
});
