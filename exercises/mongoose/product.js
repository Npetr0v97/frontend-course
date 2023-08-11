const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => console.log("Connection open!"))
    .catch(err => { console.log("OH NO ERROR"); console.log(err); });

    const productSchema = new mongoose.Schema({

        name:{
            type: String,
            required: true,
            maxlength: 20
        },
        price:{
            type: Number,
            required:true,
            min:[0, "Price cannot be a negative number"]
        },
        onSale:{
            type: Boolean,
            default:false
        },
        categories:{
            type: [String]
        },
        qty: {
            online: {
                type: Number,
                default: 0
            },
            inStore: {
                type: Number,
                default: 0
            }
        },
        size: {
            type: String,
            enum: ["S","M","L"]
        }
         
    })


productSchema.methods.greet = function() {
    console.log("Hello");
    console.log(this.name);
}

    const Product = mongoose.model("Product",productSchema);

    const bike = new Product({name:"Tire Pump", price: -19.5, categories: ["Cycling"], size: "XS"}); 

    const findProduct = async function() {
        const foundProduct = await Product.findOne({name: "Bike Helmet"});
        foundProduct.greet();
    }

    findProduct();

    // bike.save().then(data => console.log(data)).catch(err => console.log(err));

    // Product.findOneAndUpdate({name:"Tire Pump"},{price: -10.99},{new:true, runValidators: true}).then(data => console.log(data)).catch(err => console.log(err)); 