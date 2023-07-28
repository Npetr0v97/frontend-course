const express = require('express');
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require('method-override');
const Campground = require("./models/campground");

const app = express();

//connecting to the database
mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () =>console.log("Database connected"));


app.get("/makecampground", async (req,res)=> {
    const camp = new Campground({title: "My Backyard"});
    // await camp.save();
    res.render("home",{camp});
})

app.get("/", (req,res) => {

    res.send("Hello world")
})
 
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));




app.listen(port, () => {
  console.log(`YelpCamp app listening on port ${port}`)
})