const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");

const productSchema =  new Mongoose.Schema({
       name:String,
       price:String,
       description:String,
       rating:String,
       images :[
              {
                image:String
              }
       ],
       category:String,
       seller:String,
       stock:String,
       numberofReviews:String,
       createdAt: Date
});
const ProductModel = mongoose.model('Product',productSchema)

module.exports = ProductModel
