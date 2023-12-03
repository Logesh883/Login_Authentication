const express = require("express");
const app = express();
const mongoose = require("mongoose");
const route = require("./Routes/Router");
const cors = require("cors");
mongoose
  .connect("mongodb://127.0.0.1:27017/form")
  .then(() => {
    console.log("Connected to Db");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.json());
app.use("/api", route);

app.listen(4000, () => {
  console.log("Served on 4000");
});
