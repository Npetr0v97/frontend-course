const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/product");
const methodOverride = require('method-override');

 
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));


mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => console.log("Connection open!"))
    .catch(err => { console.log("OH NO ERROR"); console.log(err); });


//Show all products
app.get("/products", async (req,res) => {
    const {category} = req.query;

    if(category) {
      const products = await Product.find({category});
      res.render("products/index",{products, category});
    } else {
      const products = await Product.find({});
      res.render("products/index",{products, category: "a ll"});
    }


})



//display the page for adding a new product
app.get("/products/new", async (req,res) => {
  const eValues=Product.schema.path('category').enumValues;

  res.render("products/new",{eValues});
})

//Show details for one product
app.get("/products/:id", async (req,res) => {
  
  const {id} = req.params;
  const product = await Product.findById(id);
  res.render("products/show",{product});
})

//Generate the edit form
app.get("/products/:id/edit", async (req,res) => {
  
  const {id} = req.params;
  const eValues=Product.schema.path('category').enumValues;
  const product = await Product.findById(id);
  res.render("products/edit",{product,eValues});
})

//create a new product
app.post("/products", async (req,res) => {
 
  // console.log(req.body);
  console.log(req.body);
  const {name,price,category} = req.body;

  const product = new Product({name,price,category});
  await product.save();
  res.redirect(`/products/${product._id}`);  
})

//edit the item
app.put("/products/:id", async (req,res) => {
  const {id} = req.params;
  const {name,price,category} = req.body;

  const product = await Product.findByIdAndUpdate(id,{name,price,category},{runValidators: true, new:true});

  res.redirect(`/products/${product._id}`); 

})

//delete an item
app.delete("/products/:id", async (req,res) => {
  const {id} = req.params;
  const product = await Product.findByIdAndDelete(id);

  res.redirect(`/products`); 

})





app.listen(port, () => {
  console.log(`APP listening on port ${port}`) 
})