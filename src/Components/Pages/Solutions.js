import React from 'react';
import Lottie from 'lottie-react'; // Import Lottie
import animationData from '../../images/animation1.json'; // Adjust the path to your JSON file44
import './Solutions.css';

const Solutions = () => {
  return (
    <div className="solutions-container my-5">
      {/* Background Animation */}
      <div className="animation-background">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <h1 className="text-center mb-4" style={{ fontFamily: 'Poppins', fontWeight: '600', paddingBottom: '10px' }}>
      Inefficiency Vs Productivity: The Trigovex Approach
        </h1>
      
      <div className="row mb-4 align-items-center">
        <div className="col-md-5">
          <div className="challenge-box">
            <h4 className="challenge-title mobile-centered">Digital Transformation</h4>
            <p className="challenge-text">
              Companies struggle with outdated technology, which decreases efficiency, limits scalability, and hinders competitiveness in a fast-paced market. They must address these legacy systems to stay relevant and responsive to market demands.
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div className="col-md-2 text-center">
          {/* SVG for Desktop View */}
          <img src="https://adya.ai/assets/HorizontalVector-7512563c.svg" alt="Connecting Icon Desktop" className="solution-image d-none d-md-block" />
          {/* SVG for Mobile View */}
          <img src="https://adya.ai/assets/VerticalVector-9ed7d211.svg" alt="Connecting Icon Mobile" className="solution-image-mobile d-md-none" />
        </div>

        <div className="col-md-5">
          <div className="solution-box">
            <h4 className="solution-title mobile-centered">Solution</h4>
            <p className="solution-text">
              Trigovex Technologies offers comprehensive digital transformation services, covering everything from strategy formulation to implementation. We migrate legacy systems to cloud solutions, automate workflows, and integrate digital tools.
            </p>
          </div>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-md-5">
          <div className="challenge-box">
            <h4 className="challenge-title mobile-centered">Custom Software Development</h4>
            <p className="challenge-text">
              Off-the-shelf software solutions often do not fit specific business needs, resulting in inefficiencies and manual workarounds. These issues can obstruct productivity and complicate operations, hindering the ability to succeed.
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div className="col-md-2 text-center">
          {/* SVG for Desktop View */}
          <img src="https://adya.ai/assets/HorizontalVector-7512563c.svg" alt="Engagement Icon Desktop" className="solution-image d-none d-md-block" />
          {/* SVG for Mobile View */}
          <img src="https://adya.ai/assets/VerticalVector-9ed7d211.svg" alt="Engagement Icon Mobile" className="solution-image-mobile d-md-none" />
        </div>

        <div className="col-md-5">
          <div className="solution-box">
            <h4 className="solution-title mobile-centered">Solution</h4>
            <p className="solution-text">
              Trigovex specializes in custom software development tailored to meet unique business processes. Our solutions focus on scalability, flexibility, and adaptability, enhancing productivity while reducing operational costs and empowering growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
