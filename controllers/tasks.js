// Task Model Interface/Schema
const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    // if no id is found within our tasks collection
    return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }

  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true, // Retrieves newly modified task
    runValidators: true, // Runs our model validators
  });
  res.status(200).json({ task, success: true });
});

const editTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true, // Retrieves newly modified task
    runValidators: true, // Runs our model validators
    overwite: true,
  });
  res.status(200).json({ task, success: true });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    // if no id is found within our tasks collection
    return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }

  res.status(200).json({ task: null, success: true });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  editTask,
  deleteTask,
};
