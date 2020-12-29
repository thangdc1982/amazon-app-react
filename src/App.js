import React, { useEffect } from 'react';
import './App.css';
// Components
import Home from './Home/Home';
import Header from './Header/Header';
import Contact from './Contact/Contact';
import Payment from './Payment/Payment';
// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import CheckOut from './CheckOut/CheckOut';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders/Orders';

const pkey = 'pk_test_51I3ShBJ79DiDp1GyulLxpNq3xrPo25AbBukeggpmh25HjnS6rSnM0w4LHSPxhKKk09PR4XeQT4YEMxmlEmX6z0MZ00fCk84Drb';
const promise = loadStripe(pkey);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // the user signed in / was signed in
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        // user signed out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);

  return (
    <div className="App">      
      <Router>        
        <Switch>
          <Route path="/orders">
            <Header />      
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />      
            <Elements stripe={promise}>
              <Payment></Payment>
            </Elements>            
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/checkout">            
            <Header />
            <CheckOut />
          </Route>
          <Route path='/contactus'>            
            <Header />
            <Contact />
          </Route>
          <Route path="/">            
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
