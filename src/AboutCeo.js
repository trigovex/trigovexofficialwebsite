import React from 'react';
import './AboutCeo.css'; // Import the external CSS file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const AboutCeo = () => {
  return (
    <div className="about-ceo container my-5">
    <h1 style={{ textAlign: 'center', fontSize:'2.8rem', color:'black', marginBottom:'30px'}}>About Us</h1> {/* Center the H1 heading */}
      <div className="row align-items-center">
      <img 
                  src="https://adya.ai/assets/FullHorizontalLine-f691a6cb.svg" 
                  alt="Horizontal Separator"
                  style={{ width: '100%', height: '100px', transform: 'scale(1)' }}
                />

      <div className="col-md-4 text-center">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQEQujwvNkQ2VQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719767758276?e=1735776000&v=beta&t=SqpuRIbnw_MVia_RlF4sTjnYJH7xgE_yfWS7vMmAPNI" alt="CEO" className="ceo-image rounded-circle" />
        </div>
        <div className="col-md-8">
        
          <div className="ceo-info p-4 mt-3">
          <h1 className="heading-primary">Meet the CEO</h1>
            <h2 className="heading-secondary">Saketh Dwaraka Gandham</h2>
            <p className="text-muted">
              Welcome to our software development company! Leading our organization with vision and determination is Saketh Dwaraka Gandham, a dynamic leader with a fervent passion for technology and innovation. Armed with a Bachelor of Technology in Electronics and Communication Engineering (ECE), Saketh brings a wealth of expertise to drive our team towards success in the ever-evolving landscape of software development.
            </p>
            <button className="contact-button mt-3">Contact Saketh</button>
          </div>
        </div>
        
      </div>
      <img 
                  src="https://adya.ai/assets/FullHorizontalLine-f691a6cb.svg" 
                  alt="Horizontal Separator" 
                  style={{ width: '100%', height: '100px', transform: 'scale(-1)' }}
                />
      <div className="row align-items-center" style={{paddingTop:'30px'}}>
        
        <div className="col-md-4 text-center">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQEQujwvNkQ2VQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719767758276?e=1735776000&v=beta&t=SqpuRIbnw_MVia_RlF4sTjnYJH7xgE_yfWS7vMmAPNI" alt="CEO" className="ceo-image rounded-circle" />
        </div>
        <div className="col-md-8">
          <div className="ceo-info p-4 mt-3">
          <h1 className="heading-primary">Meet the CMO</h1>
            <h2 className="heading-secondary">Saketh Dwaraka Gandham</h2>
            <p className="text-muted">
              Welcome to our software development company! Leading our organization with vision and determination is Saketh Dwaraka Gandham, a dynamic leader with a fervent passion for technology and innovation. Armed with a Bachelor of Technology in Electronics and Communication Engineering (ECE), Saketh brings a wealth of expertise to drive our team towards success in the ever-evolving landscape of software development.
            </p>
            <button className="contact-button mt-3">Contact Saketh</button>
          </div>
        </div>
        <img 
                  src="https://adya.ai/assets/FullHorizontalLine-f691a6cb.svg" 
                  alt="Horizontal Separator"  
                  style={{ width: '100%', height: '100px', transform: 'scale(1)' }}
                />
        
      </div>
    </div>
  );
};

export default AboutCeo;
