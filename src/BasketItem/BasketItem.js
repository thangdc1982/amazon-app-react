import React from 'react';
import './BasketItem.css';
import { useStateValue } from '../StateProvider';

function BasketItem({id, title, image, price, rating, hideButton}) {

  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id
    });
  };

  return (
    <div className="basketItem">
      <img src={image} className="basketItem-image" alt=""></img>
      <div className="basketItem-info">
        <p className="basketItem-title">{title}</p>
        <p className="basketItem-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="basketItem-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <i className="fas fa-star" key={i}></i>
            ))}
        </div>
        {
          !hideButton && (<button onClick={removeFromBasket}>&nbsp;Remove from basket&nbsp;</button>)
        }        
      </div>
    </div>
  )
}

export default BasketItem;
