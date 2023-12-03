const express = require("express");
const { Post } = require("./post");
const SignUpCheck = require("./SignUpCheck");
const LoginCheck = require("./LoginCheck");
const route = express.Router();

route.post("/post", Post);
route.get("/check", SignUpCheck);
route.get("/login", LoginCheck);

module.exports = route;
