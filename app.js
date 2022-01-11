const express = require("express");
const app = express();
//cors
const cors = require("cors");
//bodyParser
const bodyParser = require("body-parser");

// routes
const Product = require("./Api/Routes/Products");
const Order = require("./Api/Routes/Order");
const Otp = require("./Api/Routes/Otp");

//mongoose
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Kona:Persist@cluster0.cyiwc.mongodb.net/MessageApp?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
//cors
app.use(cors());
// path
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/Order", Order);
app.use("/Product", Product);
app.use("/Otp", Otp);
//handling error
app.use((req, res, next) => {
  const error = new Error("Uh Oh Error occured");
  error.status = 400;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status);
  res.json({ msg: error.message });
});

module.exports = app;
