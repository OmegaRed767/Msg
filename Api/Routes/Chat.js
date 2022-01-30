const express = require("express");
const route = express.Router();

route.get("/Chat", (req, res, next) => {
  res.status(200).json({ msg: "chat" });
});

module.exports = route;
