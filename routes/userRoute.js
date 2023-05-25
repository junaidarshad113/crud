const express = require("express");
const {
  createUser,
  getData,
  deleteUser,
  updateUser,
} = require("../controller/userCtrl");

const router = express.Router();

router.post("/users", createUser);
router.get("/getAllUsers", getData);
router.delete("/deleteUser/:id", deleteUser);
router.put("/userUpdate/:id", updateUser);

module.exports = router;
