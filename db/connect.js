require("dotenv").config();
const mongoose = require("mongoose");
const connectionString = process.env.DB_CONNECTION_STRING;

mongoose
  .connect(connectionString)
  .then(() => console.log("connected to the db...."))
  .catch((err) => console.log(err));
