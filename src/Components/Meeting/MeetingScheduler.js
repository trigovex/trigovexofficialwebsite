import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MeetingScheduler.css";
import MeetingForm from "./MeetingForm"; // Import your MeetingForm component
import { motion } from 'framer-motion';
import { pageTransitions } from '../common/transitions';

const MeetingScheduler = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");

  const timeslots = ["12:00pm", "12:15pm", "12:30pm", "3:15pm", "3:30pm", "3:45pm", "4:00pm"];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime("");
    setAvailableTimes(timeslots); // Set timeslots based on the selected date
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleConfirmMeeting = () => {
    if (selectedDate && selectedTime) {
      // Navigate to MeetingForm and pass the selected date and time
      navigate("/meeting-form", {
        state: {
          date: selectedDate,  // Pass the selected date
          time: selectedTime    // Pass the selected time
        }
      });
    }
  };

  const currentDate = new Date();

  return (
    <motion.div
      className="page-container"
      variants={pageTransitions}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <div className="calender-container">
        <div className="row">
          {/* <div className="col-lg-4 col-md-6 mb-4">
          <img
              src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg"
              alt="Project Management"
              className="img-fluid mb-3" // 'img-fluid' for responsiveness
            />
            <h3 className="title">Project Meeting</h3>
            <p className="duration">Duration: 15 min</p>
          </div> */}
          <div className="col-lg-12 col-md-12">
            <div className="card scheduler-card">
            <h2 style={{textAlign:'center'}}>Schedule Meeting</h2>
              <div className="card-header">Select a Date & Time</div>
              <div className="card-body">
                <div className="row">
                  {/* Calendar Section */}
                  <div className="col-12 col-md-6 calendar-container">
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0} // Disable weekends
                      minDate={currentDate} // Disable past dates
                      inline
                      className="custom-calendar"
                    />
                  </div>

                  {/* Time Selection: Show only after date selection */}
                  {selectedDate && (
                    <div className="col-12 col-md-6 time-slot-section">
                      <h5 className="time-title">Select a Time</h5>
                      <ul className="list-group">
                        {availableTimes.map((time) => (
                          <li
                            key={time}
                            className={`list-group-item ${selectedTime === time ? "active-time" : ""}`}
                            onClick={() => handleTimeClick(time)}
                          >
                            {time}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="mt-3">
                  {selectedDate && selectedTime ? (
                    <button className="btn btn-primary confirm-btn" onClick={handleConfirmMeeting}>
                      Confirm Meeting on {moment(selectedDate).format("MMMM Do, YYYY")} at {selectedTime}
                    </button>
                  ) : (
                    <button className="btn btn-secondary confirm-btn" disabled>
                      Select Date & Time to Confirm
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MeetingScheduler;
