const express = require("express");
const route = express.Router();

route.get("/all", (req, res, next) => {
  res.status(200).json({ msg: "get all data" });
});

route.get("/info", (req, res, next) => {
  res.status(200).json({ msg: "product info" });
});

route.post("/add", (req, res, next) => {
  res.status(200).json({ msg: "add product" });
});

route.patch("/patch/:id", (req, res, next) => {
  res.status(200).json({ msg: "patch product", _id: req.params.id });
});

route.delete("/delete/:id", (req, res, next) => {
  res.status(200).json({ msg: "delete product", _id: req.params.id });
});

module.exports = route;
