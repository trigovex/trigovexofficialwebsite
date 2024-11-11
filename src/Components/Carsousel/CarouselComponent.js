import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Banner2 from '../Banners/Banner2';  // Import Banner2 component
import Banner3 from '../Banners/Banner3';  // Import Banner3 component
import './CarouselComponent.css';
const CarouselComponent = () => {
  return (
    <div className="text-center">
      <h1 className="text-center mb-4" style={{ fontFamily: 'Poppins', fontWeight: '600' }}>
        Our Products
      </h1>
      <Carousel interval={3000} pause={false}> {/* Set the interval to 3000 ms and disable pause on hover */}
        <Carousel.Item>
          <div className="carousel-item-content">
            <Banner2 />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-item-content">
            <Banner3 />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
