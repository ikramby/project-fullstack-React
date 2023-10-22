import React from 'react';
import ProductElement from './ProductCard';
import axios from 'axios';
import  { useState, useEffect } from 'react';

const ProductDetails = ({ productDetail, cartListData, setCartListData }) => {


  const handleCheckout = () => {
   
    axios
      .post('http://Localhost:5000/api/products/addcartlist', {
        name: productDetail.name,
        price:productDetail.price,
      })
      .then(({ res }) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={productDetail.imageUrl} alt="Product" />
      </div>
      <div className="product-info">
        <h1>{productDetail.name}</h1>
        <p>Couleur: {productDetail.couleur}</p>
        {productDetail.size && <p>Pointure: {productDetail.size}</p>}
        <p>Catégorie: {productDetail.categories}</p>
        <p>Marque: {productDetail.marque}</p>
        <p>Prix: {productDetail.price} DT</p>
       
        <button onClick={handleCheckout}>Ajouter au panier</button>


        
      </div>
    </div>
  );
};

export default ProductDetails;
