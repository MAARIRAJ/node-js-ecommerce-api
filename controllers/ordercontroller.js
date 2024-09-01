const ordermodel = require("../models/ordermodels")



exports.createOrder=(req,res,next) => {
    //const cartItems = req.body;
    //const amount = cartItems.reduce((acc,item) => (acc + item.product.price*item.qty),0)
    // console.log(amount,"amount");
     

    res.json({
        success:true,
        message:"order works properly",
        
    })
}