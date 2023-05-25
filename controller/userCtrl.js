const Users = require("../data/data");

exports.createUser = async (req, res, next) => {
  const userData = req.body;
  Users.push(userData);
  res.status(201).json({
    message: "user saved successfully",
    userData,
  });
};
exports.getData = (req, res) => {
  res.json(Users);
};
exports.deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const removeUser = Users.findIndex((user) => user.id === userId);
  if (removeUser !== -1) {
    Users.splice(removeUser, 1);
    res.status(200).json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  const updateUser = Users.findIndex((user) => user.id === userId);
  if (updateUser !== -1) {
    Users[updateUser] = userData;
    res.status(200).json({ message: "User updated successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
