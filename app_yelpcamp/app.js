const express = require('express');
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require('method-override');

const app = express();

//connecting to the database
mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => console.log("Connection open!"))
    .catch(err => { console.log("OH NO ERROR"); console.log(err); });


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