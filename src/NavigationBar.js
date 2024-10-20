import React from 'react';
import './NavigationBar.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import logo from './images/trigovexnew2.jpg'; // Adjust the path to your logo image

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="TRIGOVEX Logo" className="navbar-logo" /> {/* Use img tag for logo */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Careers</a>
            </li>
          </ul>
          <button className="btn btn-danger">Schedule Meet</button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
