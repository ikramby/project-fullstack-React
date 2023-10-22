import React, { useState } from 'react';
import axios from 'axios';
import { Card } from 'antd';

const NewProduct = ({ addNewProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMarque, setSelectedMarque] = useState('');

  const [newProduct, setNewProduct] = useState({
    imageUrl: '',
    name: '',
    couleur: '',
    price: '',
    size: '',
    categories: '',
    marque: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/products/addproduct', newProduct)
      .then((response) => {
        console.log('Opération faite avec succés', response);
        window.location.reload();

      })
      
      .catch((error) => {
        console.error("Erreur d'ajout de chaussure", error);
      });

    setNewProduct({
      imageUrl: '',
      name: '',
      couleur: '',
      price: '',
      size: '',
      categories: '',
      marque: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
     <Card
  bordered={true}
  className="h-full"
  style={{
    width: '100%',
    height: '500px',
    margin: '0 auto', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  <div
    className='product-card'
    style={{
      width: '100%',
      height: '450px',
    }}
  >
          <h2>Ajouter de nouvelle chaussure</h2>
          <div>
            <label>Image URL:</label>
            <input
              type="text"
              name="imageUrl"
              value={newProduct.imageUrl}
              onChange={handleChange}
              style={{ width: '70%' , marginLeft:"3px"}}
            />
          </div><br></br>
          <div>
            <label>Nom:  </label>
            <input
              type='text'
              style={{ width: '70%', marginLeft:"30px" }}
              name="name"
              value={newProduct.name}
              onChange={handleChange}
            />
          </div><br></br>
          <div>
            <label>Couleur:</label>
            <input
              type='text'
              style={{ width: '70%', marginLeft:"20px" }}
              name="couleur"
              value={newProduct.couleur}
              onChange={handleChange}
            />
          </div><br></br>
          <div>
            <label>Prix:</label>
            <input
              type='text'
              style={{ width: '70%', marginLeft:"45px" }}
              name="price"
              value={newProduct.price}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div>
            <label>Pointure:</label>
            <input
              type='text'
              style={{ width: '70%', marginLeft:"20px" }}
              name="size"
              value={newProduct.size}
              onChange={handleChange}
            />
          </div><br></br>
          <div>
            <label>Catégorie:</label>
            <select
    name="categories"
    value={selectedCategory}
    onChange={(e) => handleChange(e, 'selectedCategory')}
    style={{ width: '70%', marginLeft: "10px" }}
  >
    <option value="">Sélectionner une catégorie</option>
    <option value="homme">Homme</option>
    <option value="femme">Femme</option>
    <option value="enfant">Enfant</option>
  </select>

          </div>
          <br></br>
          <div>
            <label>Marque:</label>
            <select
    name="marque"
    value={selectedMarque}
    onChange={(e) => handleChange(e, 'selectedMarque')}
    style={{ width: '70%', marginLeft: "20px" }}
  >
    <option value="">Sélectionner une marque</option>
    <option value="Nike">Nike</option>
    <option value="Michael Kors">Michael Kors</option>
    <option value="Lacoste">Lacoste</option>
    <option value="Geox">Geox</option>
  </select>

          </div>
          <br></br>
          <button type="submit" style={{ float: 'right' }}>
            Ajouter
        </button>

        </div>
      </Card>
    </form>
  );
};

export default NewProduct;
