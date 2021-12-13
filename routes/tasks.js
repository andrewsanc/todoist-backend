const express = require("express");
const router = express.Router();

// Controllers import
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
} = require("../controllers/tasks");

// Router set up for task endpoints
router.route("/").get(getAllTasks).post(createTask);
router
  .route("/:id")
  .get(getTask)
  .patch(updateTask) // Partially updates our task data
  .delete(deleteTask)
  .put(editTask); // Overwrites and replaces our data.

module.exports = router;
