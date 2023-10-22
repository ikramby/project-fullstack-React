const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const CartListSchema = new mongoose.Schema({
    name: String,
    price: Number
  });

  const CartList = mongoose.model("CartList", CartListSchema);
   
  module.exports ={
    CartList
  }