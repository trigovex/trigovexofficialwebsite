import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Applications.css';
import foodlogo from './images/foodlogo.png';
import blurimage from './images/TrigovexSquare.png';
import AOS from 'aos';

function Applications() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const foodDeliveryData = [
    {
      title: "User Application",
      iconColor: "#31a76f",
      image: foodlogo
    },
    {
      title: "Restaurant Application",
      iconColor: "#31a76f",
      image: foodlogo
    },
    {
      title: "Delivery Boy Application",
      iconColor: "#31a76f",
      image: foodlogo
    }
  ];

  const eCommerceData = [
    {
      title: "Buyer Application",
      iconColor: "#31a76f",  // Match this color to food delivery
      image: foodlogo
    },
    {
      title: "Seller Application",
      iconColor: "#31a76f",  // Match this color to food delivery
      image: foodlogo
    },
    {
      title: "Logistics App",
      iconColor: "#31a76f",  // Match this color to food delivery
      image: foodlogo
    }
  ];

  return (
    <div className="container my-5">
      {/* Food Delivery Applications Section */}
      <div className="row justify-content-center">
        <h1 className="text-center mb-4" style={{ fontFamily: 'Poppins', fontWeight: '600', paddingBottom: '10px', paddingTop: '20px'}}>
          TRIGOVEX's Food Delivery Application
        </h1>
        {foodDeliveryData.map((card, index) => (
          <React.Fragment key={index}>
            <div className="col-md-3 col-lg-2 my-2 d-flex justify-content-center">
              <div 
                className="applications-card shadow border-0 text-center" 
                data-aos={window.innerWidth > 768 ? 'fade-right' : 'fade-down'} // AOS effect based on screen size
                data-aos-delay={window.innerWidth > 768 ? index * 300 : 0} // Delay for desktop view
              >
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div
                    className="applications-icon-container mb-3"
                    style={{
                      border: `3px solid ${card.iconColor}`,
                      color: card.iconColor
                    }}
                  >
                    <img src={card.image} alt={`${card.title} icon`} />
                  </div>
                  <h5 className="applications-card-title" style={{ color: card.iconColor }}>{card.title}</h5>
                </div>
              </div>
            </div>

            {/* Add an image between the columns */}
            {index < foodDeliveryData.length - 1 && (
              <div className="col d-flex justify-content-center my-2 separator-container">
                <img 
                  src="https://adya.ai/assets/HorizontalVector-7512563c.svg" 
                  alt="Horizontal Separator" 
                  className="separator-image horizontal" 
                  style={{ width: '100%', height: '100px', transform: 'scale(1)' }}
                />
                <img 
                  src="https://adya.ai/assets/VerticalVector-9ed7d211.svg" 
                  alt="Vertical Separator" 
                  className="separator-image vertical" 
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* E-Commerce Applications Section */}
      <div className="row justify-content-center" style={{ marginTop: '50px' }}>
        <h1 className="text-center mb-4" style={{ fontFamily: 'Poppins', fontWeight: '600', paddingBottom: '10px' }}>
          TRIGOVEX's E-Commerce Application
        </h1>
        {eCommerceData.map((card, index) => (
          <React.Fragment key={index}>
            <div className="col-md-3 col-lg-2 my-2 d-flex justify-content-center">
              <div 
                className="applications-card shadow border-0 text-center" 
                data-aos={window.innerWidth > 768 ? 'fade-right' : 'fade-down'} // AOS effect based on screen size
                data-aos-delay={window.innerWidth > 768 ? index * 300 : 0} // Delay for desktop view
              >
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div
                    className="applications-icon-container mb-3"
                    style={{
                      border: `3px solid ${card.iconColor}`,
                      color: card.iconColor
                    }}
                  >
                    <img src={card.image} alt={`${card.title} icon`} />
                  </div>
                  <h5 className="applications-card-title" style={{ color: card.iconColor }}>{card.title}</h5>
                </div>
              </div>
            </div>

            {/* Add an image between the columns */}
            {index < eCommerceData.length - 1 && (
              <div className="col d-flex justify-content-center my-2 separator-container">
                <img 
                  src="https://adya.ai/assets/HorizontalVector-7512563c.svg" 
                  alt="Horizontal Separator" 
                  className="separator-image horizontal" 
                  style={{ width: '100%', height: '100px', transform: 'scale(1)' }}
                />
                <img 
                  src="https://adya.ai/assets/VerticalVector-9ed7d211.svg" 
                  alt="Vertical Separator" 
                  className="separator-image vertical" 
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Applications;
