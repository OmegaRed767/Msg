const express = require("express");
const Otp = require("../Models/Otp");
const route = express.Router();
const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");

//Otp
var otpGenerator = require("otp-generator");

//twillo
const client = require("twilio")(
  "ACd7cef8ffe1a2a6527241befd794b4a85",
  "9099be88f5d0dda9dd5952020206a179"
);

route.get("/Otp/Generate", (req, res, next) => {
  const g_otp = otpGenerator.generate(6, {
    alphabets: false,
    upperCase: false,
    specialChars: false,
  });

  client.messages.create({
    body: g_otp,
    from: "+16106013011",
    to: "+91" + req.body.number,
  });
  bcrypt.hash(g_otp, 10, (err, hash) => {
    if (err) {
      return res.status(200).json({ err });
    }
    if (hash) {
      const otp = new Otp({
        _id: new mongoose.Types.ObjectId(),
        number: req.body.number,
        _otp: hash,
      });
      otp
        .save()
        .then((doc) => {
          res.status(200).json({ doc });
        })
        .catch((err) => {
          res.status(400).json({ err });
        });
    }
  });
});

route.get("/Otp/Verify", (req, res, next) => {
  Otp.find({ mobile: req.body.mobile })
    .exec()
    .then((doc) => {
      bcrypt.compare(req.body._otp, doc[0]._otp, function (err, result) {
        if (result) {
          return res.status(200).json({ msg: "Auth Successful" });
        }
        if (err) {
          return res.status(400).json({ msg: "Err" });
        }
        return res.status(400).json({ msg: "Err" });
      });
    })
    .catch((err) => {
      res.status(400).json({ msg: "Err" });
    });
});

module.exports = route;
