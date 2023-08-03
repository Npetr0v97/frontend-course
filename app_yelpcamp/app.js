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
// const Joi = require("joi");
const { campgroundSchema } = require("./schemas.js");
const { stat } = require("fs");

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

const validateCampground = (req, res, next) => {
  const { error } = campgroundSchema.validate(req.body);

  if (error) {
    const msg = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

//Index page that display all campgrounds
app.get(
  "/campgrounds",
  catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index.ejs", { campgrounds });
  })
);

//Get the create page
app.get("/campgrounds/new", (req, res) => {
  res.render("campgrounds/new");
});

//Display one specific campground
app.get(
  "/campgrounds/:id",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    res.render("campgrounds/show.ejs", { campground });
  })
);

//Display one specific campground
app.get(
  "/campgrounds/:id/edit",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    res.render("campgrounds/edit.ejs", { campground });
  })
);

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

//Index page that display all campgrounds
app.post(
  "/campgrounds",
  validateCampground,
  catchAsync(async (req, res, next) => {
    // if (!req.body.campground)
    //   throw new ExpressError("Invalid Campground Data", 400); //used for post requests via algorithms outside of the validated form

    const campground = new Campground(req.body.campground);
    //   res.send(campground);
    // console.log(campground);
    await campground.save();
    res.redirect(`campgrounds/${campground._id}`);
  })
);

//Update a campground
app.put("/campgrounds/:id", validateCampground, async (req, res) => {
  const { id } = req.params;
  // console.log(id,req.body.campground);

  const campground = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  });
  res.redirect(`/campgrounds/${campground._id}`);
});

//delete a campground
app.delete(
  "/campgrounds/:id",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect(`/campgrounds`);
  })
);

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
