import React from 'react';
import './Contact.css';
import ContactImg from '../images/contact.jpg';

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div>
        <img className="contact-image"
          src={ContactImg}
          alt="" />
        </div>
        <div className="bg-3 text-center">    
          <br />          
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Product & Technical Support</h3>
                  <p className="card-text">Need to make a change to your order or appointment? Perhaps you have a question about tires or your vehicle? We can help.</p>                  
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-phone-volume"></i>&nbsp;
                    Call Us
                  </h5>
                  <p className="card-text">
                    <small>8am - 5pm EST, Monday - Friday</small><br />
                    <strong>1-888-123-4567</strong>
                  </p>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-at"></i>&nbsp;
                    Email Us
                  </h5>
                  <p className="card-text">WebSupport@tirewheel.com</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4"> 
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Customer Service Feedback</h3>
                  <p className="card-text">For customer service feedback, please use the contacts below</p>                  
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-phone-volume"></i>&nbsp;
                    Call Us
                  </h5>
                  <p className="card-text">
                    <small>8am - 5pm EST, Monday - Friday</small><br />
                    <strong>1-888-123-8899</strong>
                  </p>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-at"></i>&nbsp;
                    Email Us
                  </h5>
                  <p className="card-text">CustomerService@tirewheel.com</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4"> 
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Store Locations</h3>
                  <p className="card-text">For store hours and contact information for a store location.</p>                                    
                </div>  
                <button className="btn btn-info">VIEW ALL LOCATIONS</button>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Contact;
