const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/product");

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");


mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => console.log("Connection open!"))
    .catch(err => { console.log("OH NO ERROR"); console.log(err); });

app.get("/products", async (req,res) => {
    const products = await Product.find({});
    // console.log(products);
    res.render("products/index",{products});
    // res.send("ALL PRODUCTS WILL BE HERE");
})

app.listen(port, () => {
  console.log(`APP listening on port ${port}`) 
})