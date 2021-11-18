const express = require("express");
const router = express.Router();

// Controllers import
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

// Router set up for task endpoiints
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
