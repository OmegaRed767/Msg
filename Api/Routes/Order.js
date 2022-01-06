const express = require("express");

const route = express.Router();

route.get("/all", (req, res, next) => {
  res.status(200).json({ msg: "all orders" });
});

route.get("/info", (req, res, next) => {
  res.status(200).json({ msg: "order info" });
});

route.post("/order", (req, res, next) => {
  res.status(200).json({ msg: "place order" });
});

route.patch("/patch/:id", (req, res, next) => {
  res.status(200).json({ msg: "patch order", _id: req.params.id });
});

route.delete("/delete/:id", (req, res, next) => {
  res.status(200).json({ msg: "delete order", _id: req.params.id });
});

module.exports = route;
