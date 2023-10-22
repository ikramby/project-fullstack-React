import React from 'react';
import axios from 'axios';

const ProductElement = ({
  product,
  index,
  productDetailData,
  handleCheckout,
  setViewUpdate,
  getIndex,
  setInputName,
  setInputImage,
  setInputPrice,
  setInputSize,
  setInputCouleur,
  setInputCategories,
  setInputMarques,
  deleteProduct, 
}) => {
  const handleDelete = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce produit?')) {
      deleteProduct(product._id); 
    }
  };

  return (
    <div className='product-card'>
      <img
        src={product.imageUrl}
        alt='img description'
        onClick={() => {
          productDetailData(index);
        }}
      />
      <h2>{product.name}</h2>
      <p className='card-item-cat'>Catégorie: {product.categories}</p>
      <p className='card-item-couleur'>Couleur: {product.couleur}</p>
      <p className='card-item-size'>Pointure: {product.size}</p>
      <p className='card-item-price'>Prix: {product.price} DT</p>
      <p className='card-item-marq'>Marque: {product.marque}</p>
      <div className='product-card-buttons'>
        <button
          onClick={() => {
            setViewUpdate(false);
            getIndex(index);
            setInputName(product.name);
            setInputImage(product.imageUrl);
            setInputPrice(product.price);
            setInputSize(product.size);
            setInputCouleur(product.couleur);
            setInputCategories(product.categories);
            setInputMarques(product.marque);
          }}
        >
          Mettre à jour
        </button>



        <button
    className='cart-list-button'
      onClick={() => {
      if (window.confirm('Êtes-vous sûr de vouloir supprimer ce produit?')) {
      axios.delete(`http://localhost:5000/api/products/deleteproduct/${product._id}`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
        }
     }}
      >
      Supprimer
        </button>



        <button
          onClick={() => {
            handleCheckout(index);
          }}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ProductElement;
