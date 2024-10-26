import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Applications.css';

function Applications() {
  const cardData = [
    {
      title: "Food Delivery",
      iconColor: "#31a76f",
      image: "https://w7.pngwing.com/pngs/691/292/png-transparent-food-delivery-computer-icons-food-delivery-online-food-ordering-food-delivery-miscellaneous-angle-food-thumbnail.png"
    },
    {
      title: "E-Commerce App",
      iconColor: "#31a76f",
      image: "https://w7.pngwing.com/pngs/691/292/png-transparent-food-delivery-computer-icons-food-delivery-online-food-ordering-food-delivery-miscellaneous-angle-food-thumbnail.png"
    },
    {
      title: "Logistics Application",
      iconColor: "#31a76f",
      image: "https://w7.pngwing.com/pngs/691/292/png-transparent-food-delivery-computer-icons-food-delivery-online-food-ordering-food-delivery-miscellaneous-angle-food-thumbnail.png"
    },
    {
      title: "Settlement App",
      iconColor: "#31a76f",
      image: "https://w7.pngwing.com/pngs/691/292/png-transparent-food-delivery-computer-icons-food-delivery-online-food-ordering-food-delivery-miscellaneous-angle-food-thumbnail.png"
    },
    {
      title: "Custom Applications",
      iconColor: "#31a76f",
      image: "https://w7.pngwing.com/pngs/691/292/png-transparent-food-delivery-computer-icons-food-delivery-online-food-ordering-food-delivery-miscellaneous-angle-food-thumbnail.png"
    }
  ];

  return (
    <div className="container-fluid my-5">
    <h1 className="text-center mb-4" style={{ fontFamily: 'Poppins', fontWeight: '600',paddingBottom:'10px' }}>
        TRIGOVEX's Applications
      </h1> {/* Title */}
      <div className="row justify-content-center">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-4 col-lg-2 my-2 d-flex justify-content-center">
            <div className="applications-card shadow border-0 text-center">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <div
                  className="applications-icon-container mb-3"
                  style={{
                    border: `3px solid ${card.iconColor}`, // Using the new darker color
                    color: card.iconColor
                  }}
                >
                  <img src={card.image} alt={`${card.title} icon`} /> {/* Using different icons */}
                </div>
                <h5 className="applications-card-title" style={{ color: card.iconColor }}>{card.title}</h5> {/* Using the new darker color */}
                {/* <button className="btn btn-primary" style={{ backgroundColor: card.iconColor, borderColor: card.iconColor }}>
                  Buy Now
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add margin-top class here */}
      <div className="row justify-content-center mt-4">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-4 col-lg-2 my-2 d-flex justify-content-center">
            <div className="applications-card shadow border-0 text-center">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <div
                  className="applications-icon-container mb-3"
                  style={{
                    border: `3px solid ${card.iconColor}`, // Using the new darker color
                    color: card.iconColor
                  }}
                >
                  <img src={card.image} alt={`${card.title} icon`} /> {/* Using different icons */}
                </div>
                <h5 className="applications-card-title" style={{ color: card.iconColor }}>{card.title}</h5> {/* Using the new darker color */}
                {/* <button className="btn btn-primary" style={{ backgroundColor: card.iconColor, borderColor: card.iconColor }}>
                  Buy Now
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Applications;
