import React from 'react';
import './SubTotal.css';
import { getBasketTotal } from '../Reducer';
import { useStateValue } from '../StateProvider';
import { useHistory } from 'react-router-dom';

function SubTotal() {
  const history = useHistory();
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <div className="subtotal-contain">
        <p>Subtotal ({basket?.length} items): <strong>${getBasketTotal(basket)}</strong></p>
      </div>
      <button onClick={(e) => history.push("/payment")} 
        disabled={basket.length === 0}
        className={basket.length === 0 ? "subtotal-button-disable" : "subtotal-button-active"}>
          <i className="fab fa-amazon-pay"></i>&nbsp;
          Proceed To Checkout
        </button>
    </div>
  )
}

export default SubTotal;
