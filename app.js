const express = require("express");
const app = express();
//cors
const cors = require("cors");
//bodyParser
const bodyParser = require("body-parser");

// routes
const Otp = require("./Api/Routes/Otp");
const Chat = require("./Api/Routes/Chat");

//mongoose
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Kona:" +
      "Persist" +
      "@cluster0.cyiwc.mongodb.net/MessageApp?retryWrites=true&w=majority",
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
app.use("/msg", (req, res, next) => {
  res.status(200).json({ msg: "hello" });
});
app.use("/Otp", Otp);
app.use("/Chat", Chat);
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
