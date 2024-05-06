const dotenv = require("dotenv");
const mongoose = require("mongoose");
const fs = require("fs");
const Tour = require("./../../models/tourModel");

dotenv.config({ path: `./../../config.env` });

const db = process.env.DATABASE.replace("<password>", process.env.PASSWORD);

mongoose
  .connect(db)
  .then((con) => {
    console.log("MongoDB connected successfully");
    // console.log(con.connections);
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Read JSON file

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, "utf-8")
);

// Import data into database

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log("Created!");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// Delete all data from database

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log("Deleted");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

console.log(process.argv);

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
