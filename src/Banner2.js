import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for layout
import './Banner2.css'; // Import the separate CSS for Banner1
import S1 from './images/s1.png';

const Banner2 = () => {
  return (
    <div className="container-fluid app-banner">
      <div className="row align-items-center">
        <div className="col-md-5 text-section text-md-start text-center">
          <div className="new-tag">
            <span>Scan,</span>Choose, and Pay Instantly &rarr;
          </div>
          <h1 className="banner-title">
            Menu <span className="highlighted-text">Ordering</span> System.
          </h1>
          <p className="banner-description">
          Our innovative menu ordering system allows customers to conveniently scan a QR code at their table, browse the restaurant’s menu, place their order directly from their phone, and make secure online payments—streamlining the dining experience with ease and efficiency
          </p>
          <button className="btn btn-success download-btn">
            <i className="fab fa-apple"></i> $ Buy Now
          </button>
        </div>

        <div className="col-md-7 text-center">
          <img src={S1} alt="Phone mockup" className="phone-image" />
        </div>
      </div>
    </div>
  );
};

export default Banner2;
