const mongoose = require("mongoose");
const Review = require("./review");
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
  title: String,
  price: Number,
  image: String,
  description: String,
  location: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

CampgroundSchema.post("findOneAndDelete", async function (doc) {
  //   console.log("DOES THIS EVEN WORK????????????????");
  if (doc) {
    await Review.deleteMany({
      _id: {
        $in: doc.reviews,
      },
    });
  }
});

module.exports = mongoose.model("Campground", CampgroundSchema);