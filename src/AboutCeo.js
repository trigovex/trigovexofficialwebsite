import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for layout
import './AboutCeo.css'; // Import the separate CSS for AboutCeo
import Saketh from './images/business.jpg';

const AboutCeo = () => {
  return (
    <div className="container-fluid ceo-banner">
      <h1 className="text-center mb-4" style={{ fontFamily: 'Poppins', fontWeight: '600', paddingTop: '50px', paddingBottom: '20px' }}>
        About Us
      </h1>
      <div className="row align-items-center">
        <div className="col-md-5 text-center">
          <img src={Saketh} alt="Saketh Dwaraka Gandham" className="ceo-image img-fluid" />
        </div>
        <div className="col-md-7 text-section text-md-start text-center">
          <h1 className="ceo-title">
            Meet Our CEO,<br /> <span className="highlighted-text">Saketh Dwaraka Gandham</span>
          </h1>
          <p className="ceo-description">
            Welcome to our software development company! Leading our organization with vision and determination is Saketh Dwaraka Gandham, a dynamic leader with a fervent passion for technology and innovation. Armed with a Bachelor of Technology in Electronics and Communication Engineering (ECE), Saketh brings a wealth of expertise to drive our team towards success in the ever-evolving landscape of software development.
          </p>
          <button className="btn btn-success contact-btn">
            <span className="button-text">Contact Saketh</span>
            <span className="button-underline"></span>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default AboutCeo;
