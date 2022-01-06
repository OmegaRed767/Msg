const express = require("express");
const app = express();
app.use("/msg", (req, res, next) => {
  res.status(200).json({ msg: "hi" });
});
module.exports = app;
