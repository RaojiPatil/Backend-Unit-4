const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/product")
}



const productSchema = new mongoose.Schema({
    product_name: {type:String, required:true},
    price: {type: Number, required: true},
    product_rating: {type: Number, required: false},
    color: {type: String, required: false},

    product_type : {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "product", 
     required: false
    }
}, {
    versionKey: false,
});


const Product = mongoose.model("product", productSchema);



// get api for all products

app.get('/product/:name', async (req,res)=>{
    try{
        const product = await Product.find({product_name:req.params.name});
        return res.send(product);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
});

// get all products
app.get('/product', async (req,res)=>{
    try{
        const product = await Product.find().lean().exec();
        return res.send(product);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
});



// Post product details

app.post('/product', async (req,res)=>{
    try{
        const product = await Product.create(req.body);
        return res.send(product);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
});





// find all products which are higher than Rs.500

app.get('/product/price', async (req,res)=>{
    try{
       const product = await Product.find().sort({price:500}).populate("product_name").lean().exec();

       return res.send(product);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
});



// find all the products which are available in more than 3 different colours


app.get('/product/color', async (req,res)=>{
    try{
       const product = await Product.find({"color":{$eq:3}}).populate("product_name").lean().exec();

       return res.send(product);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
});


// find all the products which have atleast 1 colour that matches.



app.get('/product/color', async (req,res)=>{
    try{
       const product = await Product.find({"color":{$eq:1}}).populate("product_name").lean().exec();

       return res.send(product);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
});


// find the product which has the most colours.



app.get('/product/color', async (req,res)=>{
    try{
       const product = await Product.find({"color":{$eq:3}}).populate("product_name").lean().exec();

       return res.send(product);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
});



// find the products which can be used by men and women.

app.get('/product/men', async (req,res)=>{
    try{
       const product = await Product.find({"product_type":{$eq:"men"}}).populate("product_name").lean().exec();

       return res.send(product);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
});


app.get('/product/women', async (req,res)=>{
    try{
       const product = await Product.find({"product_type":{$eq:"women"}}).populate("product_name").lean().exec();

       return res.send(product);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
});


// find the colour which has the most products.

app.get('/product/color', async (req,res)=>{
    try{
       const product = await Product.find({"color":{$eq:3}}).populate("product_name").lean().exec();

       return res.send(product);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"failed"})
    }
});





app.listen('2222', async(req, res) => {
    await connect();
    console.log("app is linstening on port 2222");
});



