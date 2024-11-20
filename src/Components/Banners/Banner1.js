import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner1.css';
import S1 from '../../images/s1.png';

const Banner1 = () => {
  const words = ['Web Development', 'App Development', 'E-Commerce', 'Enterprise Solutions'];
  const [index, setIndex] = useState(0); // Index of the current word
  const [subIndex, setSubIndex] = useState(0); // Index for typing effect
  const [reverse, setReverse] = useState(false); // For erasing the text

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      // Pause before erasing
      setTimeout(() => setReverse(true), 800); // Slightly shorter pause
      return;
    }

    if (subIndex === 0 && reverse) {
      // Move to the next word after erasing
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 70 : 100); // Faster typing and erasing

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <div className="container-fluid app-banner">
      <div className="row align-items-center">
        <div className="col-md-5 text-section text-md-start text-center">
          <div className="new-tag">
            <span>New</span> Beta now available &rarr;
          </div>
          <h1 className="banner-title">
  #1 in<br />
  <span className="highlighted-text-wrapper">
    <span className="highlighted-text">
      {`${words[index].substring(0, subIndex)}`}
    </span>
  </span>
</h1>
          <p className="banner-description">
            We create experiences that transform brands, grow businesses, and make people's lives better. Let's create something special together.
          </p>
          <button className="btn btn-success download-btn">
            Schedule Meeting
          </button>
        </div>

        <div className="col-md-7 text-center">
          <img src={S1} alt="Phone mockup" className="phone-image" />
        </div>
      </div>
    </div>
  );
};

export default Banner1;
