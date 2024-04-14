const http = require("http");
const fs = require("fs");
const url = require("url");

const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`);
const tempCard = fs.readFileSync(`${__dirname}/templates/card.html`);
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`);
const dataObj = JSON.parse(data);

const replaceTemplate = (temp, product) => {
  let output = temp.toString().replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);
  if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  return output;
};

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
