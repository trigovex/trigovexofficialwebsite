import React from 'react';
import Banner1 from '../../Components/Banners/Banner1';
import Timeline from '../../Components/Pages/Timeline';
import Services from '../../Components/Pages/Services';
import CarouselComponent from '../../Components/Carsousel/CarouselComponent';
import Solutions from '../../Components/Pages/Solutions';
import ServiceStats from '../../Components/Pages/ServiceStats';
import TestimonialCarousel from '../../Components/Carsousel/TestimonialCarousel';
import Applications from '../../Components/Pages/Applications';
import BusinessTypes from '../../Components/Pages/BusinessTypes';
import AboutCeo from '../../Components/Pages/AboutCeo';
import MeetingScheduler from '../../Components/Meeting/MeetingScheduler';
import { motion } from 'framer-motion';
import { pageTransitions } from '../../Components/common/transitions';

const Home = () => {
  return (
    <motion.div
      variants={pageTransitions}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <div className="home-container mt-5 pt-5">
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
      </div>
    </motion.div>
  );
};

export default Home; 