const express = require("express");
const fs = require("fs");
const app = express();

// Middleware is just a function that can modify the incoming data
app.use(express.json());

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
  console.log(tours[tours.length - 1].id + 1);
});

app.post("/api/v1/tours", (req, res) => {
  let newId;
  if (tours.length === 0) {
    newId = 1; // If tours array is empty, start from 1
  } else {
    newId = tours[tours.length - 1].id + 1; // Increment the last ID
  }

  const newTour = { id: newId, ...req.body };
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      if (err) {
        // Handle error
        console.error(err);
        res.status(500).json({
          status: "error",
          message: "Failed to write tour data.",
        });
      } else {
        res.status(201).json({
          status: "success",
          data: {
            tours: newTour,
          },
        });
      }
    }
  );
});

app.patch("/api/v1/tours/:id", (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "error",
      message: "Invalid ID",
    });
  }
});

app.listen(3000, () => {
  console.log("Server started!");
});
