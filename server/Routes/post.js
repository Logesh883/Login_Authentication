const dataSchema = require("../Schema");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
app.use(express.json());

const Post = async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 7);
  const data = await dataSchema({
    email: req.body.email,
    password: hash,
  });
  const savedData = await data.save();
  res.json({ data: savedData, msg: "User Created" });
};

module.exports = { Post };
