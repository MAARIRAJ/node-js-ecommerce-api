const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    cartitems:String,
    amount:String,
    status:String,
    createdAt:Date
})


const ordermodel = mongoose.model('Order',orderSchema);

module.exports=ordermodel