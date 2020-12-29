import React, { useState } from 'react';
import './SignIn.css';
import Logo from '../images/banner.png';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function SignIn() {  
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {        
        history.push("/");
      })    
      .catch(error => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // Succeed to create a new user with email and password
        if (auth) {
          history.push("/");
        }
      })    
      .catch(error => alert(error.message));
  };

  return (
    <div className="signin">
      <Link to="/">
        <img src={Logo} alt="" className="signin-image"></img>
      </Link>
      <div className="signin-container">
        <h1>Sign-In</h1>        
        <form className="container">
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input type="email" className="form-control" id="email"
              value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" className="form-control" id="password"
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>        
          <button type="submit" className="signin-Button" onClick={signIn}>Sign In</button>      
        </form>      
        <p>
          By Signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale.
          Please see out Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice
        </p>
        <button className="signin-registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  )
}

export default SignIn;
