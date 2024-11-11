import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './NavigationBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/trigovexnew2.jpg';

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleScheduleMeet = () => {
    navigate('/meeting-sheduler');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="TRIGOVEX Logo" className="navbar-logo" />
        </Link>
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
              <NavLink 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                } 
                to="/"
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                } 
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                } 
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                } 
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                } 
                to="/gallery"
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                } 
                to="/careers"
              >
                Careers
              </NavLink>
            </li>
          </ul>
          <button 
            className="btn btn-danger"
            onClick={handleScheduleMeet}
          >
            Schedule Meet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
