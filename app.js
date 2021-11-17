const express = require("express");
const app = express();

// Routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

const port = 4000;

app.listen(port, console.log(`Server is listening on port ${port}`));
