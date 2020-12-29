import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from '../StateProvider';
import BasketItem from '../BasketItem/BasketItem';
import { getBasketTotal } from '../Reducer';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from '../axios';
import { db } from '../firebase';
import { useHistory } from 'react-router-dom';

function Payment() {
  const [{basket, user}, dispatch] = useStateValue();  

  const history = useHistory();

  const [error, setError] = useState(null);
  const [disbale, setDisable] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {    
    const getClientSecret = async () => {
      let total = basket && basket.length ? getBasketTotal(basket) * 100 : 0;
      if (total > 0) {
        const response = await axios({
          method: 'post',
          url: `/payments/create?total=${getBasketTotal(basket) * 100}`
        });
        setClientSecret(response.data.clientSecret);
      }      
    };
    getClientSecret();    
  }, [basket]);
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({paymentIntent}) => {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        });
      setSucceeded(true);
      setError(null);
      setProcessing(false);

      dispatch({
        type: "EMPTY_BASKET"
      });

      history.replace('/orders');
    });
  };

  const handleChange = (e) => {
    // Listen the change on Card Element
    setDisable(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment-title-header">
        <h1>Checkout {basket? "(" + basket.length + " items)" : ""}</h1>
      </div>      
      <div className="payment-container">
        {/** Address */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p><b>{user ? user.email : "Guest"}</b></p>
            <p>123 King Street</p>
            <p>Toronto, ON M6E 2V5</p>
          </div>
        </div>
        {/** Review Items */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Reviews items for delivery</h3>
          </div>
          <div className="payment-items">
            {basket.map((item, index) => (
              <BasketItem
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/** Payment options */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}></CardElement>
              <br />
              <div className="payment-priceContainer">
                <h3>Order Total: ${getBasketTotal(basket)}</h3>
                <button type="submit" disabled={processing || disbale || succeeded}>
                  <span>{processing ? "Processing" : "Buy Now"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment;
