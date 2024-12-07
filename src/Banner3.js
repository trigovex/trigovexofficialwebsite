import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for layout
import './Banner3.css'; // Import the separate CSS for Banner1
import S1 from './images/s1.png';

const Banner3 = () => {
  return (
    <div className="container-fluid app-banner3">
      <div className="row align-items-center">
        <div className="col-md-5 text-section text-md-start text-center">
          <div className="new-tag glassmorphism">
            <span>Manage,</span>Monitor & Heal Effortlessly &rarr;
          </div>
          <h1 className="banner-title">
         <span className="highlighted2-text">Hospital</span> Management.
          </h1>
          <p className="banner-description">
          Our Hospital Management System is a comprehensive solution designed to streamline hospital operations by digitizing patient records, appointment scheduling, billing, and staff management. It enhances efficiency, improves patient care.

          </p>
          <button className="btn btn-success download-btn">
          ₹ Buy Now
          </button>
        </div>

        <div className="col-md-7 text-center">
          <img src={S1} alt="Phone mockup" className="phone-image" />
        </div>
      </div>
    </div>
  );
};

export default Banner3;
