const express = require("express");
const ejsMate = require("ejs-mate");
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
const methodOverride = require("method-override");
const Campground = require("./models/campground");
const ExpressError = require("./utils/ExpressError");
const catchAsync = require("./utils/catchAsync");
const Review = require("./models/review");
// const Joi = require("joi");
const { campgroundSchema, reviewSchema } = require("./schemas.js");
const { stat } = require("fs");
const campgrounds = require("./routes/campgrounds");
const reviews = require("./routes/reviews");
const session = require("express-session");
const flash = require("connect-flash");

const app = express();

//connecting to the database
mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// override with POST having ?_method=DELETE
app.engine("ejs", ejsMate);
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const sessionConfig = {
  secret: "thisshouldbeabettersecret!",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
};
app.use(session(sessionConfig));
app.use(flash());

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Database connected"));

app.use(morgan("tiny"));

app.use((req, res, next) => {
  //   console.log("Middleware");

  next();
});

const verifyPassword = function (req, res, next) {
  const { password } = req.query;

  if (password === "t123") {
    next();
  } else {
    // res.send("Wrong password");
    throw new ExpressError("Password required!", 401);
  }
};

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.use("/campgrounds", campgrounds);
app.use("/campgrounds/:id/reviews", reviews);
app.use(express.static(path.join(__dirname, "public")));

//tests
app.get("/test", verifyPassword, (req, res) => {
  res.send("Corect password");
});

//tests
app.get("/error", (req, res) => {
  chicken.fly();
});

//test
app.get("/", (req, res) => {
  res.send("Hello world");
});

//test for admin
app.get("/admin", (req, res) => {
  throw new ExpressError("You are not an admin", 403);
});

//error handling

// app.use((err, req, res, next) => {
//   console.error("******************************");
//   console.error("************Error*************");
//   console.error("******************************");
//   console.log(err);
//   //   res.status(500).send("OH BOY, WE GOT AN ERROR");
//   next(err);
// });

app.all("*", (req, res, next) => {
  next(new ExpressError("Page not found", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  if (!err.message) err.essage = "Oh no, something went wrong";
  res.status(statusCode);
  res.render("error", { err });
});

app.listen(port, () => {
  console.log(`YelpCamp app listening on port ${port}`);
});
