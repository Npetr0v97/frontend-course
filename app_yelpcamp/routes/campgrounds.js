const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const Campground = require("../models/campground");
const { isLoggedIn, validateCampground, isAuthor } = require("../middleware");
const campgrounds = require("../controllers/campgrounds");
const campground = require("../models/campground");

//Index page that display all campgrounds
router.get("/", catchAsync(campgrounds.index));

//Get the create page
router.get("/new", isLoggedIn, campgrounds.renderNewForm);

//Display one specific campground
router.get("/:id", catchAsync(campgrounds.showCampground));

//Display one specific campground
router.get(
  "/:id/edit",
  isLoggedIn,
  isAuthor,
  catchAsync(campgrounds.renderEditForm)
);

//creating a new campground
router.post(
  "/",
  isLoggedIn,
  validateCampground,
  catchAsync(campgrounds.createCampground)
);

//Update a campground
router.put(
  "/:id",
  isLoggedIn,
  isAuthor,
  validateCampground,
  catchAsync(campgrounds.editCampground)
);

//delete a campground
router.delete(
  "/:id",
  isLoggedIn,
  isAuthor,
  catchAsync(campgrounds.deleteCampground)
);

module.exports = router;
