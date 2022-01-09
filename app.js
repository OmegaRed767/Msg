const express = require("express");
const app = express();
//twillo
const client = require("twilio")(
  "ACd7cef8ffe1a2a6527241befd794b4a85",
  "9099be88f5d0dda9dd5952020206a179"
);
// routes
const Product = require("./Api/Routes/Products");
const Order = require("./Api/Routes/Order");

// app.use("/Order", Order);
// app.use("/Product", Product);
app.use("/msg", (req, res, next) => {
  client.messages
    .create({
      body: "This is the ship that made the Kessel Run in fourteen parsecs?",
      from: "+16106013011",
      to: "+919840650469",
    })
    .then((message) => console.log(message.sid));
});

module.exports = app;
