const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide a name"], // required[1] - response if name value isn't provided
    trim: true, // trims our req name value
    maxlength: [20, "name cannot exceed 20 characters"], // Sets the maxLength of our name string and response if maxLength exceeds 20 chars
  },
  completed: {
    type: Boolean,
    default: false, // Default value for our db
  },
});

module.exports = mongoose.model("Task", TaskSchema);
