import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./MeetingForm.css";
import { motion } from 'framer-motion';
import { pageTransitions } from '../common/transitions';
import SuccessModal from '../common/SuccessModal';

const MeetingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { date, time } = location.state || {};
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsModalOpen(true); // Show success modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/"); // Navigate to home page after closing modal
  };

  return (
    <motion.div
      className="page-container"
      variants={pageTransitions}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <div className="container meeting-form-container">
        <button className="btn btn-success mb-4" onClick={() => navigate(-1)}>
          <i className="fas fa-arrow-left"></i> {/* Back icon */}
          <span className="ms-2">Back</span>
        </button>
        <h3 className="form-title">Meeting Details</h3>
        <p>
          <i className="fas fa-calendar-alt" style={{margin:'5px'}}></i>
          {date ? date.toDateString() : "Not available"}, {time || "Not available"}
        </p>
        <p>
          <i className="fas fa-clock" style={{margin:'5px'}}></i>
          15 Minutes
        </p>

        <form onSubmit={handleSubmit} className="meeting-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Project Description</label>
            <textarea id="description" className="form-control" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary mt-3">Schedule Meeting</button>
        </form>
      </div>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        message={`Your meeting has been scheduled for ${date ? date.toDateString() : "Not available"} at ${time || "Not available"}. We'll send you a confirmation email shortly.`}
      />
    </motion.div>
  );
};

export default MeetingForm;
