import React from 'react';
import './CheckOut.css';
import { useStateValue } from '../StateProvider';
import SubTotal from '../SubTotal/SubTotal';
import BasketItem from '../BasketItem/BasketItem';

function CheckOut() {
  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className="checkout">      
      <div className="checkout-left">
        <h3>Hello, {user ? user.email : 'Guest'}</h3>
        <h2 className="checkout-title">YOUR CART</h2>
        {
          basket?.map((element, i) => (
            <BasketItem
              key={i}
              id={element.id}
              price={element.price}
              title={element.title}
              rating={element.rating}
              image={element.image}
            ></BasketItem>
          ))
        }
      </div>
      <div className="checkout-right">
        <SubTotal></SubTotal>
      </div>      
    </div>
  )
}

export default CheckOut;
