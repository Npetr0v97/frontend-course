const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => console.log("Connection open!"))
    .catch(err => { console.log("OH NO ERROR"); console.log(err); });


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String,

})

const Movie = mongoose.model("Movie", movieSchema);

// const amadeus = new Movie({ title: "Amadeus", year: 1964, score: 9.2, rating: "R" });

// Movie.insertMany([
//     { title: "Fave movie 1", year: 1964, score: 3.0, rating: "R" },
//     { title: "Rush Hour", year: 2023, score: 8.2, rating: "R" }, 
//     { title: "Batman", year: 2001, score: 9.2, rating: "PG13" }, 
//     { title: "Spiderman", year: 2003, score: 9.2, rating: "R" }])
//     .then(data => console.log(data));



