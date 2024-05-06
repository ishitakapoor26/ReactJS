const express = require("express");
const fs = require("fs");
const Tour = require("./../models/tourModel");

const getAllTours = (req, res) => {
  const tours = JSON.parse(
    fs.readFileSync(`./dev-data/data/tours-simple.json`, "utf-8")
  );

  res.status(200).json({
    status: "success",
    data: {
      tours,
    },
  });
  console.log(tours[tours.length - 1].id + 1);
};

const addTour = (req, res) => {
  const tours = JSON.parse(
    fs.readFileSync(`./dev-data/data/tours-simple.json`, "utf-8")
  );

  let newId;
  if (tours.length === 0) {
    newId = 1; // If tours array is empty, start from 1
  } else {
    newId = tours[tours.length - 1].id + 1; // Increment the last ID
  }

  const newTour = { id: newId, ...req.body };
  tours.push(newTour);

  fs.writeFile(
    `./dev-data/data/tours-simple.json`,
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
};

const updateTour = (req, res) => {
  const tours = JSON.parse(
    fs.readFileSync(`./dev-data/data/tours-simple.json`, "utf-8")
  );

  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "error",
      message: "Invalid ID",
    });
  }
};

module.exports = {
  getAllTours,
  addTour,
  updateTour,
};
