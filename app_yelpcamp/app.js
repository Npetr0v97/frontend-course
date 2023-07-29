const express = require('express');
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require('method-override');
const morgan = require("morgan");
const Campground = require("./models/campground");

const app = express();

//connecting to the database
mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}));
app.use(morgan("tiny"));

//MIDDLEWARE
app.use((req,res,next) => {
    req.requestTime = Date.now();

    next();
})

//this middleware applies only to the path of "/test"
app.use("/test",(req,res,next) => {
    console.log("I LOVE TESTS");

    next();
})


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () =>console.log("Database connected"));


//Index page that display all campgrounds
app.get("/campgrounds", async (req,res)=> {
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index.ejs", {campgrounds});
})

//Get the create page
app.get("/campgrounds/new",  (req,res)=> {

    res.render("campgrounds/new");
})

//Display one specific campground
app.get("/campgrounds/:id", async (req,res)=> {
    const {id} = req.params;
    const campground = await Campground.findById(id);
    res.render("campgrounds/show.ejs", {campground});
})

//Display one specific campground
app.get("/campgrounds/:id/edit", async (req,res)=> {
    const {id} = req.params;
    const campground = await Campground.findById(id);
    res.render("campgrounds/edit.ejs", {campground});
})

//tests
app.get("/", (req,res) => {

    res.send("Hello world");
})

//test
app.get("/test", (req,res) => {
    console.log(`REQUEST TIME: ${req.requestTime}`);

    res.send("Test page");
})

//Index page that display all campgrounds
app.post("/campgrounds", async (req,res)=> {

    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`campgrounds/${campground._id}`);
})

//Update a campground
app.put("/campgrounds/:id", async (req,res)=> {
    const {id} = req.params;
    // console.log(id,req.body.campground);

    const campground = await Campground.findByIdAndUpdate(id,{...req.body.campground});
    res.redirect(`/campgrounds/${campground._id}`);
})

//Update a campground
app.delete("/campgrounds/:id", async (req,res)=> {
    const {id} = req.params;
    const campground = await Campground.findByIdAndDelete(id);
    res.redirect(`/campgrounds`);
})

 
//MIDDLEWARE - if all else fails
app.use((req,res,next) => {
    console.log("DOESNT EXIST");


})


app.listen(port, () => {
  console.log(`YelpCamp app listening on port ${port}`)
})