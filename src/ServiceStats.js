// ServiceStats.js
import React from 'react';
import './ServiceStats.css';
import appsImage from './images/apps.png';
import webImage from './images/web.png';
import gameImage from './images/game.png';
import iotImage from './images/iot.jpg';
import reviewImage from './images/review.jpg';
import awardsImage from './images/awards.jpg';
import employeesImage from './images/employees.jpg';

const statsData = [
    { img: appsImage, value: '20+', label: 'Apps Developed' },
    { img: webImage, value: '10+', label: 'Developers' },
    { img: webImage, value: '50+', label: 'Websites Designed' },
    { img: gameImage, value: '10+', label: 'Games Developed' },
    { img: iotImage, value: '100+', label: 'AI & IoT Solutions' },
    { img: reviewImage, value: '100+', label: 'Happy Clients' },
    { img: awardsImage, value: '5', label: 'Awards Winning' },
    { img: employeesImage, value: '25+', label: 'Employees' },
];

const ServiceStats = () => {
    return (
        <div className="container">
            <h1 className="text-center my-4" style={{ fontFamily: 'Poppins', fontWeight: '600', paddingBottom: '30PX' }}>
                TRIGOVEX's JOURNEY
            </h1> {/* Title */}
            <div className="row">
                {statsData.map((stat, index) => (
                    <div 
                        key={index} 
                        className="col-md-3 col-sm-6 mb-4" 
                        data-aos="fade-right" 
                        data-aos-delay={index * 100}
                    >
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <img 
                                    src={stat.img} 
                                    alt={stat.label} 
                                    className="card-img-top" 
                                    style={{ maxWidth: '60px', marginRight: '15px' }} 
                                />
                                <div>
                                    <h3>{stat.value}</h3>
                                    <p>{stat.label}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceStats;
