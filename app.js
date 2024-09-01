const express = require('express');
const app = express();
const dotenv=require("dotenv");
const connectDatabase=require("./config/controldatabase")
const path=require("path");
dotenv.config({path: path.join(__dirname,"config","config.env")})

const products= require("./routes/product");
const orders= require("./routes/order");

connectDatabase();

app.use("/api/v1/",products)
app.use("/api/v1/",orders)


app.listen(process.env.PORT ,() => {
    console.log(`server running properly ${process.env.PORT} is ${process.env.NODE_ENV} `);
    
});

