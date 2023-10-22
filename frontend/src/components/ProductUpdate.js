import React, { useState, useEffect } from 'react';
import ProductElement from './ProductCard';
import axios from 'axios';

const ProductsList = ({ selectedCategory, productName, setView, setProductDetail }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [viewUpdate, setViewUpdate] = useState(true);
  const [iup, setIndexUpdate] = useState(0);
  const [inputImage, setInputImage] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputSize, setInputSize] = useState(""); 
  const [inputCouleur, setInputCouleur] = useState("");
  const [inputCategories, setInputCategories] = useState("");
  const [inputMarques, setInputMarques] = useState(""); 

  const [render, setRender] = useState(false);

  const getIndex = (i) => {
    setIndexUpdate(i);
  };
  const productDetailData = (index) => {
    setProductDetail(allProducts[index]);
    setView("details");
  };
 

  const handleCheckout = (i) => {
    axios
      .post('http://Localhost:5000/api/products/addcartlist', {
        name: allProducts[i].name,
        price: allProducts[i].price,
      })
      .then(({ res }) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/products/getAll')
      .then(({ data }) => {
        setAllProducts(data);
        setOriginalProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filteredProducts = originalProducts.filter(
        (product) => product.categories === selectedCategory
      );
      setAllProducts(filteredProducts);
    } else {
      setAllProducts(originalProducts);
    }
  }, [selectedCategory, originalProducts]);


  useEffect(() => {
    if (productName) {
      const filteredProducts = originalProducts.filter((product) =>
        product.name.toLowerCase().includes(productName.toLowerCase())
      );
      setAllProducts(filteredProducts);
    } else {
      setAllProducts(originalProducts);
    }
  }, [productName, originalProducts]);
  const countProducts = (productName) => {
    const count = allProducts.reduce((total, product) => {
      if (product.name === productName) {
        return total + 1;
      }
      return total;
    }, 0);
    return count;
  };
  return viewUpdate ? (
    <div>
      <div className='products-list'>
        {allProducts.map((product, index) => (
          <ProductElement
            key={index}
            index={index}
            product={product}
            setView={setView}
            productDetailData={productDetailData}
            handleCheckout={handleCheckout}
            setViewUpdate={setViewUpdate}
            getIndex={getIndex}
            setInputName={setInputName}
            setInputImage={setInputImage}
            setInputPrice={setInputPrice}
            setInputSize={setInputSize}
            setInputCouleur={setInputCouleur}
            setInputCategories={setInputCategories}
            setInputMarques={setInputMarques}
          />
        ))}
      </div>
      
    </div>
  ) : (
    <form
      style={{
        height: '400px',
        margin: '100px',
        padding: '20px',
        border: '2px solid black',
      }}
    >
      Image: <br />
      <input
        type='text'
        style={{ width: '80%' }}
        value={inputImage}
        onChange={(e) => {
          setInputImage(e.target.value);
        }}
      />
      <br />
      Nom: <br />
      <input
        type='text'
        style={{ width: '80%' }}
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
      />
      <br />
      Couleur:<br />
      <input
        type='text'
        style={{ width: '80%' }}
        value={inputCouleur}
        onChange={(e) => {
          setInputCouleur(e.target.value);
        }}
      />
      <br />
      Prix: <br />
      <input
        type='text'
        style={{ width: '80%' }}
        value={inputPrice}
        onChange={(e) => {
          setInputPrice(e.target.value);
        }}
      />
      <br />
      Pointure: <br />
      <input
        type='text'
        style={{ width: '80%' }}
        value={inputSize}
        onChange={(e) => {
          setInputSize(e.target.value);
        }}
      />
      <br />
      Categorie:
      <br />
      <input
        type='text'
        style={{ width: '80%' }}
        value={inputCategories}
        onChange={(e) => {
          setInputCategories(e.target.value);
        }}
      />
      <br />
      <br />
      Marque:
      <br />
      <input
        type='text'
        style={{ width: '80%' }}
        value={inputMarques}
        onChange={(e) => {
          setInputMarques(e.target.value);
        }}
      />
      <br />
      <button
        style={{ margin: '20px' }}
        onClick={(e) => {
          e.preventDefault();

          setViewUpdate(true);
          axios
          .put(`http://Localhost:5000/api/products/update/${allProducts[iup]._id}`, {
            imageUrl: inputImage,
            name: inputName,
            couleur: inputCouleur,
            price: inputPrice,
            categories: inputCategories,
            marque: inputMarques,
            size: inputSize,
          })
          .then((res) => {
            console.log(res);
            setRender(!render);
            setViewUpdate(true); 
          })
          .catch((err) => {
            console.log(err);
          });
          
        

        //  setRender(!render);
        }}
      >
        Mettre à jour
      </button>
      <br />
    </form>
  );
};

export default ProductsList;
