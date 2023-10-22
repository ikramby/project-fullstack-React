const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  name: String,
  couleur: String,
  imageUrl: String,
  price: Number,
  size: Number,
  categories: {
    type: String,
    enum: ['homme', 'femme', 'enfant'],
  },
  marque: {
    type: String,
    enum: ['Nike', 'Michael Kors', 'Lacoste', 'Geox'],
  }
   


});



const Product = mongoose.model("Product", productSchema);

module.exports = Product;


