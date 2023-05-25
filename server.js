const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { connectDatabase } = require("./config/db");
const routes = require("./routes/userRoute");
dotenv.config();

//mongodb connection
connectDatabase();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", routes);

//port
const port = process.env.PORT || 8080;

//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
  );
});
