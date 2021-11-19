require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

// Middleware

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

app.listen(port, console.log(`Server is listening on port ${port}`));
