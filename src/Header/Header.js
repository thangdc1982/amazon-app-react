import React from 'react';
import './Header.css';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

function Header() {
  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = () => {    
    if (user) {
      auth.signOut();      
    }
  };
  return (
    <div className="container-fluid header">      
      <div className="row">
      {/** Logo */}
      <div className="col-sm-2 col-md-1">
        <Link to="/">
          <img src={Logo} className="header-logo" alt="Tire & Wheel" />
        </Link>
      </div>
      {/** Search bar */}
      <div className="col-sm-5 col-md-7 header-search">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search" aria-label="Search" />
          <div className="input-groupd-append">
            <span className="input-group-text header-searchIcon">
              <i className="fas fa-search fa-2x"></i>
            </span>
          </div>
        </div>
      </div>
      {/** Nav component */}
      <div className="col-sm-5 col-md-4">
        <div className="header-nav">
          <div className="header-option">
            <Link to="/contactus">
              <strong>Contact Us</strong>
            </Link>
          </div>
          {
            user && (
              <div className="header-option">
                <Link to="/orders">
                  <strong>Orders</strong>
                </Link>
              </div>
            )
          }          
          <div className="header-option">
            <Link to={user ? "/" : "/signin"}>   
              <div onClick={handleAuthentication}>
                <span className="header-optionLineTwo">{user ? "Sign Out" : "Sign In"}</span><br />              
                <span className="header-optionLineOne">Hello, {!user ? "Guest" : user.email}</span>
              </div>                         
            </Link>
          </div>  
          <div>
            <Link to="/checkout">
              <div className="header-optionBasket">
                <i className="fas fa-shopping-cart fa-2x"></i>
                <span className="header-basketCount">
                  {basket?.length}
                </span>
              </div>
            </Link>
          </div>                  
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header;
