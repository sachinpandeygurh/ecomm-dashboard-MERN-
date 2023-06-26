const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name: String,
    price:String,
    category:String,
    company:String,
    userId:String,
    userName:String

})

module.exports=mongoose.model("products", productSchema);