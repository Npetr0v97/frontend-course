const port = 3000;
const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

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
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const newCampground = new Campground({
      author: "64de2c435a409641d819a85c",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image: "https://source.unsplash.com/collection/483251",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consectetur beatae quasi. Corrupti magnam, deserunt blanditiis porro, amet animi aspernatur sapiente eveniet temporibus eaque exercitationem fugiat debitis neque dignissimos minima.",
      price: `${Math.floor(Math.random() * 1000)}`,
    });
    await newCampground.save();
  }
};

seedDB().then(() => mongoose.connection.close());
