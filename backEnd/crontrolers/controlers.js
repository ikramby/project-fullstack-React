const Product = require('../mongoDb/Product');
const {CartList} = require('../mongoDb/cart');

module.exports = {
  getData: async (req, res) => {
    try {
      const data = await Product.find();
      res.status(200).json(data);
    } catch (err) {
      console.error(err); 
      res.status(500).json(err);
    }
  },

  addToCart: async (req, res) => {
    try {
      const data = await CartList.create(req.body
        // name: req.body.name,
        // price: req.body.price
      );
      res.status(201).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

   getCartListData : async (req, res)=>{

    try {
     const cartListData = await CartList.find();
     res.status(200).json(cartListData)

    }
    catch (err){
      console.log(err);
      res.status(500).json(err)
    }
   },

   deleteCartList : async (req, res)=>{
    try {
      const cartListData = await CartList.deleteOne({_id:req.params.id});
      res.status(200).json(cartListData)
 
     }
     catch (err){
       console.log(err);
       res.status(500).json(err)
     }

   },
   deleteAllCartList : async (req, res)=>{
    try {
      const cartListData = await CartList.deleteMany();
      res.status(200).json(cartListData)
 
     }
     catch (err){
       console.log(err);
       res.status(500).json(err)
     }

   },

   upDate : async (req, res)=>{
    try{
      const data = await Product.findOneAndUpdate({_id:req.params.id},req.body);
      res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json(err);
    }
   },


   deleteProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndRemove(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  addProduct: async (req, res) => {
    try {
      const newProduct = await Product.create(req.body);
      res.status(201).json(newProduct);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },


};

