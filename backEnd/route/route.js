const express = require('express');
const router = express.Router();
const {getData, addToCart, addProduct,getCartListData, deleteCartList, deleteAllCartList,upDate,deleteProduct } = require ('../crontrolers/controlers')


router.get('/getAll', getData);
router.post("/addcartlist" , addToCart);
router.get('/getCartList', getCartListData);
router.delete('/delete/:id', deleteCartList);
router.delete('/deleteAll', deleteAllCartList);
router.put('/update/:id', upDate)
router.delete('/deleteproduct/:id', deleteProduct)
router.post("/addproduct" , addProduct);


module.exports=router;







