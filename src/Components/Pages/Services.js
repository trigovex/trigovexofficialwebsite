import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';
import { pageTransitions } from '../common/transitions';

const Services = ({ image, title, description }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4"> {/* Bootstrap columns */}
      <div className="services-card">
        <div className="d-flex align-items-center"> {/* Flexbox to align image and title side by side */}
          <div className="image-section">
            <img src={image} alt={title} />
          </div>
          <h3 className="title-section">{title}</h3> {/* Title next to image */}
        </div>
        <div className="content-section">
          <p>{description}</p>
          <button className="read-more">Read More</button>
        </div>
      </div>
    </div>
  );
};

const ServicesList = () => {
  const servicesData = [
    { image: 'https://media.istockphoto.com/id/1168518630/vector/web-develop.jpg?s=612x612&w=0&k=20&c=1zIvRkqICXbLWbeB1SKRHFcmpw4yhMHGWH8IfrZm0m0=', title: 'Web Development', description: 'Creating and maintaining websites and web applications using the latest technologies and frameworks.' },
    { image: 'https://media.istockphoto.com/id/1168518630/vector/web-develop.jpg?s=612x612&w=0&k=20&c=1zIvRkqICXbLWbeB1SKRHFcmpw4yhMHGWH8IfrZm0m0=', title: 'Mobile App Development', description: 'Designing and developing mobile applications for both Android and iOS platforms using modern technologies.' },
    { image: 'https://media.istockphoto.com/id/1168518630/vector/web-develop.jpg?s=612x612&w=0&k=20&c=1zIvRkqICXbLWbeB1SKRHFcmpw4yhMHGWH8IfrZm0m0=', title: 'DevOps Solutions', description: 'Streamlining and automating the development, deployment, and operations processes for faster delivery and reliability.' },
    { image: 'https://media.istockphoto.com/id/1168518630/vector/web-develop.jpg?s=612x612&w=0&k=20&c=1zIvRkqICXbLWbeB1SKRHFcmpw4yhMHGWH8IfrZm0m0=', title: 'Cloud Computing', description: 'Leveraging cloud infrastructure to build scalable and cost-efficient applications while ensuring data security.' },
    { image: 'https://media.istockphoto.com/id/1168518630/vector/web-develop.jpg?s=612x612&w=0&k=20&c=1zIvRkqICXbLWbeB1SKRHFcmpw4yhMHGWH8IfrZm0m0=', title: 'API Development', description: 'Designing robust and secure APIs to integrate various services and applications seamlessly.' },
    { image: 'https://media.istockphoto.com/id/1168518630/vector/web-develop.jpg?s=612x612&w=0&k=20&c=1zIvRkqICXbLWbeB1SKRHFcmpw4yhMHGWH8IfrZm0m0=', title: 'UX/UI Design', description: 'Crafting user-friendly interfaces and providing seamless user experiences for web and mobile applications.' }
  ];

  return (

    <motion.div
    className="page-container"
    variants={pageTransitions}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.3 }}
  >
    <div className="services-page-wrapper" style={{ paddingTop: '50px' }}>
      <div className="container">
        <h1 className="text-center my-4" style={{ fontFamily: 'Poppins', fontWeight: '600', paddingBottom: '20px' }}>Our Services</h1>
        <div className="row">
          {servicesData.map((item, index) => (
            <Services
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
        </motion.div>
  );
};

export default ServicesList;
