const dotenv = require("dotenv");
const app = require("./app");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

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

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
