import React from 'react';
import { useStateValue } from '../StateProvider';
import './ProductInfo.css';

/**
 * Each product will have 
 * id
 * title
 * image url 
 * price
 * rating
 */
function ProductInfo({id, title, image, price, rating}) {

  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {    
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating
      }
    });
  };
  
  const getFullPrice = () => {
    return Math.floor(price);
  };

  const getFractionPrice = () => {
    let priceStr = price + "";
    try {
      if (priceStr.indexOf(".") > 0) {
        priceStr = priceStr.split(".")[1];      
        if (priceStr.length === 1) {
          priceStr = priceStr + "0";
        }
      } else {
        priceStr = "00";
      }     
    } catch (err) {
      priceStr = "00";
    }
    return priceStr;
  }

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small className="price-symbol">CDN$</small>
          <strong className="price-whole">{getFullPrice()}</strong>
          <small className="price-fraction">{getFractionPrice()}</small>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (<i className="fas fa-star" key={i}></i>))
          }
        </div>        
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>&nbsp;Add to Basket&nbsp;</button>
    </div>
  )
}

export default ProductInfo;
