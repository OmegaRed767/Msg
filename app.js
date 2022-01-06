const express = require("express");
const app = express();
// routes
const Product = require("./Api/Routes/Products");
const Order = require("./Api/Routes/Order");

app.use("/Order", Order);
app.use("/Product", Product);

module.exports = app;
