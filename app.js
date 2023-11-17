const express = require("express");
require("dotenv").config();
const DatabaseConnection = require("./src/db/config");
//const bodyParser = require('body-parser');
const userRouters = require("./src/route/user");
const taskRouters = require("./src/route/task");
//const cors = require('cors')

const app = express();

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json())
app.use(express.json());

//app.use(cors())
app.use("/users", userRouters);
app.use("/tasks", taskRouters);

DatabaseConnection.connectDB();
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`The server is runinnig at ${PORT}`);
});

module.exports = app;
