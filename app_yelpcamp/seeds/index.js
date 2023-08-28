if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const port = 3000;
const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

const mapBoxToken = process.env.MAPBOX_TOKEN;

const geocoder = mbxGeocoding({
  accessToken: mapBoxToken,
});

//connecting to the database
mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Database connected"));

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

const seedDB = async function () {
  await Campground.deleteMany({});
  for (let i = 0; i < 300; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const newCampground = new Campground({
      author: "64de2c435a409641d819a85c",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      images: [
        {
          url: "https://res.cloudinary.com/dqphwin68/image/upload/v1692824751/YelpCamp/b5qoes06eplmujartbdm.jpg",
          filename: "YelpCamp/b5qoes06eplmujartbdm",
        },
        {
          url: "https://res-console.cloudinary.com/dqphwin68/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/WWVscENhbXAvZ3BkbGFydjViMm04cnBrb3MxbjE=/template_primary",
          filename: "YelpCamp/gpdlarv5b2m8rpkos1n1",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consectetur beatae quasi. Corrupti magnam, deserunt blanditiis porro, amet animi aspernatur sapiente eveniet temporibus eaque exercitationem fugiat debitis neque dignissimos minima.",
      price: `${Math.floor(Math.random() * 1000)}`,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
    });

    // const geoData = await geocoder
    //   .forwardGeocode({ query: newCampground.location, limit: 1 })
    //   .send();
    // newCampground.geometry = geoData.body.features[0].geometry;
    await newCampground.save();
  }
};

seedDB().then(() => mongoose.connection.close());
