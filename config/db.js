const mongoose = require("mongoose");
const colors = require("colors");
exports.connectDatabase = async () => {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/crud")
      .then((con) => console.log("Database is connected".bgGreen.white));
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`.bgRed.white);
  }
};
