const mongoose = require("mongoose");
const Product = require("./models/product");




mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => console.log("Connection open!"))
    .catch(err => { console.log("OH NO ERROR"); console.log(err); });



// const p = new Product({
//     name: "Ruby Grapefruit",
//     price: 1.99,
//     category: "fruit"
// })

// p.save().then(res => console.log(res)).catch(err => console.log(err));

const seedProducts = [{
    name: "Fairy Eggplant",
    price: 2.99,
    category: "vegetable"
},{
    name: "Organic Celery",
    price: 0.99,
    category: "vegetable"
},{
    name: "Godess Melon",
    price: 4.99,
    category: "fruit"
},{
    name: "Chocolate Mil",
    price: 7.99,
    category: "dairy"
}];

// Product.insertMany(seedProducts).then(res => console.log(res)).catch(err => console.log(err));