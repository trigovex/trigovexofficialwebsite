import React from 'react';
import './AboutCeo.css';
import ceoimage from './images/Saketh.png';

const AboutCeo = () => {
  return (
    <div className="about-ceo-container">
      <h1 className="main-title">About Us</h1>
      
      {/* CEO Section */}
      <div className="profile-card">
        <div className="profile-image">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4D03AQEQujwvNkQ2VQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719767758276?e=1738800000&v=beta&t=38XAtlOYY82a-KmPGmxkbDOSCgLkMPGr8AxHBhxGYks"
          />
        </div>
        <div className="profile-content">
          <h2 className="profile-title">Meet the CEO & Founder</h2>
          <h3 className="profile-name">Saketh Dwaraka Gandham</h3>
          <p className="profile-description">
            Welcome to our software development company! Leading our organization with vision and determination is Saketh Dwaraka Gandham, a dynamic leader with a fervent passion for technology and innovation. Armed with a Bachelor of Technology in Electronics and Communication Engineering (ECE), Saketh brings a wealth of expertise to drive our team towards success in the ever-evolving landscape of software development.
          </p>
          <button className="contact-btn">Contact Saketh</button>
        </div>
      </div>

      {/* CMO Section */}
      {/* <div className="profile-card">
        <div className="profile-content">
          <h2 className="profile-title">Meet</h2>
          <h3 className="profile-name">Dora Babu Bommireddy</h3>
          <p className="profile-description">
            Welcome to our software development company! Leading our organization with vision and determination is Saketh Dwaraka Gandham, a dynamic leader with a fervent passion for technology and innovation. Armed with a Bachelor of Technology in Electronics and Communication Engineering (ECE), Saketh brings a wealth of expertise to drive our team towards success in the ever-evolving landscape of software development.
          </p>
          <button className="contact-btn">Contact Saketh</button>
        </div>
        <div className="profile-image">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4D03AQEQujwvNkQ2VQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719767758276?e=1735776000&v=beta&t=SqpuRIbnw_MVia_RlF4sTjnYJH7xgE_yfWS7vMmAPNI" 
            alt="CMO" 
          />
        </div>
      </div>
      <div className="profile-card">
        <div className="profile-image">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4D03AQEQujwvNkQ2VQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719767758276?e=1735776000&v=beta&t=SqpuRIbnw_MVia_RlF4sTjnYJH7xgE_yfWS7vMmAPNI" 
            alt="CEO" 
          />
        </div>
        <div className="profile-content">
          <h2 className="profile-title">Meet the CEO & Founder</h2>
          <h3 className="profile-name">Saketh Dwaraka Gandham</h3>
          <p className="profile-description">
            Welcome to our software development company! Leading our organization with vision and determination is Saketh Dwaraka Gandham, a dynamic leader with a fervent passion for technology and innovation. Armed with a Bachelor of Technology in Electronics and Communication Engineering (ECE), Saketh brings a wealth of expertise to drive our team towards success in the ever-evolving landscape of software development.
          </p>
          <button className="contact-btn">Contact Saketh</button>
        </div>
      </div>
      <div className="profile-card">
        <div className="profile-content">
          <h2 className="profile-title">Meet</h2>
          <h3 className="profile-name">Dora Babu Bommireddy</h3>
          <p className="profile-description">
            Welcome to our software development company! Leading our organization with vision and determination is Saketh Dwaraka Gandham, a dynamic leader with a fervent passion for technology and innovation. Armed with a Bachelor of Technology in Electronics and Communication Engineering (ECE), Saketh brings a wealth of expertise to drive our team towards success in the ever-evolving landscape of software development.
          </p>
          <button className="contact-btn">Contact Saketh</button>
        </div>
        <div className="profile-image">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4D03AQEQujwvNkQ2VQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719767758276?e=1735776000&v=beta&t=SqpuRIbnw_MVia_RlF4sTjnYJH7xgE_yfWS7vMmAPNI" 
            alt="CMO" 
          />
        </div>
      </div> */}
      
    </div>
  );
};

export default AboutCeo;
