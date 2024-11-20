// Countdown.js
import React, { useState, useEffect } from 'react';
import './Countdown.css'; // Make sure to create this CSS file
// If using date-fns:
// import { differenceInSeconds } from 'date-fns';

const Countdown = () => {
  // Set your launch date here
  const launchDate = new Date('2025-01-25T00:00:00'); // Adjust the date and time as needed

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = launchDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)), // Approximate
        days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the timer on unmount
    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <div className="countdown-container">
      
      <div className="countdown-header">
        <h2 className="countdown-title gradient-text">Launching 'Jatayu'</h2>
      </div>
      
      <h4 className="countdown-tag">(A Super App for Ordering Everything.)</h4>
      <div className="countdown-wrapper">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <React.Fragment key={unit}>
            <div className="countdown-item">
              <div 
                className="countdown-value"
                key={value} // This forces re-render and animation when value changes
              >
                {value}
              </div>
              <div className="countdown-label">{unit}</div>
            </div>
            {unit !== 'sec' && <div className="countdown-separator">:</div>}
          </React.Fragment>
        ))}
      </div>
      
    </div>
  );
};

export default Countdown;
