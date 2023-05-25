const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "name is required"],
  },
  id: {
    type: Number,
  },
  age: {
    type: Number,
    required: [true, "age is require"],
  },
  role: {
    type: String,
    required: [true, "role is require"],
  },
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
