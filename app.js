const express = require("express");
const app = express();
//mongoose
const mongoose = require("mongoose");
//cors
const cors = require("cors");
// bodyparser
const bodyParser = require("body-parser");
//routes
// const product = require("./api/routes/Products");
// const orders = require("./api/routes/Orders");
// const user = require("./api/routes/User");
//connect to db
mongoose
  .connect(
    "mongodb+srv://Kona:Persist@cluster0.cyiwc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch((x) => {
    console.log(x);
  });
//cors
app.use(cors());
//making folder available public
app.use("/Upload", express.static("Upload"));
//parse-body-request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//handing path
app.use("/msg", (req, res, next) => {
  res.status(200).json({ msg: "Hello world23" });
});
// app.use("/Product", product);
// app.use("/Order", orders);
// app.use("/User", user);

//err
app.use((req, res, next) => {
  const error = new Error("Error Occured");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    msg: error.message,
  });
});
module.exports = app;

// const express = require("express");
// const app = express();
// //cors
// const cors = require("cors");
// //bodyParser
// const bodyParser = require("body-parser");

// // routes
// const Otp = require("./Api/Routes/Otp");
// const Chat = require("./Api/Routes/Chat");

// //mongoose
// const mongoose = require("mongoose");

// mongoose
//   .connect(
//     "mongodb+srv://Kona:" +
//       "Persist" +
//       "@cluster0.cyiwc.mongodb.net/MessageApp?retryWrites=true&w=majority",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => {
//     console.log("connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// //cors
// app.use(cors());
// // path
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use("/msg", (req, res, next) => {
//   res.status(200).json({ msg: "hello world" });
// });
// app.use("/Otp", Otp);
// app.use("/Chat", Chat);
// //handling error
// app.use((req, res, next) => {
//   const error = new Error("Uh Oh Error occured");
//   error.status = 400;
//   next(error);
// });

// app.use((error, req, res, next) => {
//   res.status(error.status);
//   res.json({ msg: error.message });
// });

// module.exports = app;
