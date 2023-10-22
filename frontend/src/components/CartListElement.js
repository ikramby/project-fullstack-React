import React from "react";
import axios from "axios";

const CartListSelected = ({product})=>{

    return (
        <div className='cart-item'>
        <span>{product.name}</span>
        <span>{product.price} DT</span>
        <button className='cart-list-button' onClick={()=>{
          axios.delete(`http://Localhost:5000/api/products/delete/${product._id}`)
          .then(({data})=>{console.log(data)})
          . catch(err=>console.log (err))
        }}>Supprimer</button>
      </div>
    )
};

export default CartListSelected;
