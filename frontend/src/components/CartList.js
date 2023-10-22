import React, { useEffect, useState } from 'react';
import CartListSelected from './CartListElement';
import axios from 'axios';

const CartList = () => {
  const [total, setTotal] = useState(0);
  const [cartListData, setCartListData] = useState([]);
  const [checkout, setCheckout] = useState(true);

  useEffect (()=>{
    axios.get('http://Localhost:5000/api/products/getCartList')
    .then(({data})=>{setCartListData(data)})
    .catch(err=>console.log(err))
  },[cartListData]);
 

  useEffect(() => {
    const Total = cartListData.reduce((accumulator, product) => {
      return accumulator + product.price;
    }, 0);
    setTotal(Total);
  }, [cartListData]);





  

  return (
    <div className='cart-list'>
      <h1>Mon Panier</h1>
      {checkout ? (
        cartListData.map((product, index) => {
          return <CartListSelected key={index} product={product} />;
        })
      ) :   (
      
        <h4>Merci d'avoir fait vos achats chez nous</h4>
      )}

      <h3>{total}DT</h3>
      <button onClick={() => {
        setCheckout(false);
        axios.delete("http://Localhost:5000/api/products/deleteAll") 

      }}>Terminer</button>
    </div>
  );
}

export default CartList;
