const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");

const sequelize = require("./util/database");
const Todo = require("./model/todo");

const app = express();
app.use(cors());

app.use(bodyParser.json({ urlencoded: true }));

const todoRoutes = require("./routes/todo");

app.use("/todo", todoRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
  });
