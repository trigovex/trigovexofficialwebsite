import React, { useEffect, useState } from 'react';
import './NavigationBar.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link, useLocation } from 'react-router-dom'; // Import Link from react-router-dom
import logo from './images/TrigovexRectangle.png'; // Adjust the path to your logo image

const NavigationBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // State to manage navbar open/close

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the navbar open/close state
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the navbar when a link is clicked
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container" style={{
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(1px)',
        WebkitBackdropFilter: 'blur(10px)', // For Safari support
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      }}>
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="TRIGOVEX Logo" className="navbar-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle} // Toggle navbar on button click
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us" onClick={handleLinkClick}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={handleLinkClick}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" onClick={handleLinkClick}>Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/clients" onClick={handleLinkClick}>Our Clients</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleLinkClick}>Contact Us</Link>
            </li>
          </ul>
          <Link to="/jatayu" className="btn btn-jatayu" onClick={handleLinkClick}>Jatayu ✨</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
