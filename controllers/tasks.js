// Task Model Interface
const Task = require("../models/tasks");

const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const createTask = (req, res) => {
  console.log(`received a request to create a new task`);
  res.json({ success: "successfully created a task" });
};

const getTask = (req, res) => {
  console.log(`requesting task ${req.params.id}`);
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
