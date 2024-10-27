import React from 'react';
import './AboutCeo.css'; // Import the external CSS file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const AboutCeo = () => {
  return (
    <div className="about-ceo container my-5">
      <div className="row align-items-center">
      <h1 className="heading-primary">Meet the CEO</h1>
        <div className="col-md-7">
          <div className="ceo-info p-4 mt-3">
            <h2 className="heading-secondary">Saketh Dwaraka Gandham</h2>
            <p className="text-muted">
              Welcome to our software development company! Leading our organization with vision and determination is Saketh Dwaraka Gandham, a dynamic leader with a fervent passion for technology and innovation. Armed with a Bachelor of Technology in Electronics and Communication Engineering (ECE), Saketh brings a wealth of expertise to drive our team towards success in the ever-evolving landscape of software development.
            </p>
          </div>
          <div className="ceo-values d-flex justify-content-between mt-4">
            <div className="value text-center">
              <i className="fas fa-user-tie value-icon"></i>
              <h4>Leadership</h4>
            </div>
            <div className="value text-center">
              <i className="fas fa-handshake value-icon"></i>
              <h4>Responsibility</h4>
            </div>
            <div className="value text-center">
              <i className="fas fa-chart-line value-icon"></i>
              <h4>Traction</h4>
            </div>
            <div className="value text-center">
              <i className="fas fa-brain value-icon"></i>
              <h4>Expertise</h4>
            </div>
          </div>
        </div>
        <div className="col-md-5 text-center">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQEQujwvNkQ2VQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719767758276?e=1735776000&v=beta&t=SqpuRIbnw_MVia_RlF4sTjnYJH7xgE_yfWS7vMmAPNI" alt="CEO" className="ceo-image rounded-circle" />
          <div className="ceo-name mt-3 p-2 text-white">
            <h4 className="font-weight-bold">Saketh Dwaraka Gandham</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCeo;
