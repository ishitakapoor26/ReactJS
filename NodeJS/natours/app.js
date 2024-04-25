const express = require("express");
const fs = require("fs");

const app = express();

// Read the JSON file synchronously
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, "utf-8")
);

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tours,
    },
  });
});

app.listen(3000, () => {
  console.log("Server started!");
});
