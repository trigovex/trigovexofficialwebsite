import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Timeline.css'; // Assuming you create a separate CSS file for styling
import Image from '../../images/sdlc2.png';
import tick from '../../images/tickmark.svg';

const Timeline = () => {
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
                            <h5 className="title">Requirements Analysis</h5>
                            <p><img src={tick} alt="Check" /> We conduct a thorough gathering and analysis of client requirements to ensure project clarity.</p>
                            <p><img src={tick} alt="Check" /> Detailed documentation and project scope definition keep all parties aligned.</p>
                        </div>
                        {/* Nurturing Fair Commerce Section */}
                        <div className="event">
                            <div className="circle"></div>
                            <h5 className="title">Design & Development</h5>
                            <p><img src={tick} alt="Check" /> Our team creates a robust architecture and system design that prioritizes scalability.</p>
                            <p><img src={tick} alt="Check" /> Agile development with regular client feedback refines the solution along the way.</p>
                        </div>
                        {/* Choice and Inclusivity Section */}
                        <div className="event">
                            <div className="circle"></div>
                            <h5 className="title">Testing & Deployment</h5>
                            <p><img src={tick} alt="Check" /> Comprehensive testing and quality assurance guarantee reliability and performance.</p>
                            <p><img src={tick} alt="Check" /> Smooth deployment and attentive post-launch support ensure continued success.</p>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="col-md-7 text-center">
                    <img src={Image} alt="ONDC Image" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
}

export default Timeline;
