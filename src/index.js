import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Timeline from './Timeline';
import './Timeline.css';
import ServiceStats from './ServiceStats';
import './ServiceStats.css';
import TestimonialCarousel from './TestimonialCarousel';
import Services from './Services';
import Banner1 from './Banner1';
import AboutCeo from './AboutCeo';
import CarouselComponent from './CarouselComponent';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import BusinessTypes from './BusinessTypes';
import Applications from './Applications';
import './Applications.css';
import './BusinessTypes.css';
import Solutions from './Solutions';
import './Solutions.css';
import MeetingScheduler from './MeetingScheduler';
import MeetingForm from './MeetingForm'; // Import the new form page
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <NavigationBar />
      <div className="content">
        <Routes>
          {/* Define routes for different components/pages */}
          <Route path="/" element={<>
            <Banner1 />
            <Timeline />
            <Services />
            <CarouselComponent />
            <Solutions />
            <ServiceStats />
            <TestimonialCarousel />
            <Applications />
            <BusinessTypes />
            <AboutCeo />
            <MeetingScheduler />
          </>} />
          {/* Separate route for MeetingForm */}
          <Route path="/meeting-form" element={<MeetingForm />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
