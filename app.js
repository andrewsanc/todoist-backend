const express = require("express");
const app = express();
const cors = require("cors");
const tasks = require("./routes/tasks");

require("dotenv").config();
const connectDB = require("./db/connect");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello W0rld");
});

app.use("/api/v1/tasks", tasks);

// Route Design
// api/v1/tasks - GET - retrieves tasks
// api/v1/tasks - POST - create new task
// api/v1/tasks/:id - GET - retrieve a task info
// api/v1/tasks/:id - PATCH - update a task
// api/v1/tasks/:id - DELETE - delete a task

const port = 4000;

// Start up function
const start = async () => {
  try {
    await connectDB(process.env.DB_CONNECTION_STRING);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
