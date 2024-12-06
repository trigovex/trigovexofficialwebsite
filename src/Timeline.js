import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Timeline.css'; // Assuming you create a separate CSS file for styling
import Image from './images/sdlc2.png';
import tick from './images/tickmark.svg';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Timeline = () => {
    React.useEffect(() => {
        AOS.init({
            duration: 600, // Set a shorter duration for faster animations
            once: true, // Animation should happen only once
        });
    }, []);

    return (
        <div className="container my-5">
            {/* Title Section */}
            <h1 className="text-center mb-4" style={{ fontFamily: 'Poppins', fontWeight: '600', paddingBottom: '50px' }}>
                Our Software Approach To Clients
            </h1>

            <div className="row">
                {/* Timeline Section */}
                <div className="col-md-5">
                    <div className="timeline">
                        {/* Breaking Barriers Section */}
                        <div className="event">
                            <div className="circle"></div>
                            <h5 className="title" data-aos="fade-right">Requirements Analysis</h5>
                            <p data-aos="fade-right"><img src={tick} alt="Check" /> We conduct a thorough gathering and analysis of client requirements to ensure project clarity.</p>
                            <p data-aos="fade-right" data-aos-delay="50"><img src={tick} alt="Check" /> Detailed documentation and project scope definition keep all parties aligned.</p>
                        </div>
                        {/* Nurturing Fair Commerce Section */}
                        <div className="event">
                            <div className="circle"></div>
                            <h5 className="title" data-aos="fade-right">Design & Development</h5>
                            <p data-aos="fade-right"><img src={tick} alt="Check" /> Our team creates a robust architecture and system design that prioritizes scalability.</p>
                            <p data-aos="fade-right" data-aos-delay="50"><img src={tick} alt="Check" /> Agile development with regular client feedback refines the solution along the way.</p>
                        </div>
                        {/* Choice and Inclusivity Section */}
                        <div className="event">
                            <div className="circle"></div>
                            <h5 className="title" data-aos="fade-right">Testing & Deployment</h5>
                            <p data-aos="fade-right"><img src={tick} alt="Check" /> Comprehensive testing and quality assurance guarantee reliability and performance.</p>
                            <p data-aos="fade-right" data-aos-delay="50"><img src={tick} alt="Check" /> Smooth deployment and attentive post-launch support ensure continued success.</p>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="col-md-7 text-center">
                    <img src={Image} alt="ONDC Image" className="img-fluid" data-aos="fade-left"/>
                </div>
            </div>
        </div>
    );
}

export default Timeline;