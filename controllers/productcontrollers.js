const ProductModel = require('../models/productmodel')



exports.getProducts= async (req,res,next) => {
   
    const products = await ProductModel.find({});


    res.json({
        success:true,
        message:"Hi get product works properly",
        products
    })
}
exports.getSingleProduct= async(req,res,next) => {
    

    try {
        const products = await ProductModel.findById(req.params.id) 
        
    res.json({
        success:true,
        message:"Hi single product works properly",
        products
    }) 
    } catch (error) {
        res.status(404).json({
        success:false,
        message:"sorry",
        
    }) 
    }
      
 
}