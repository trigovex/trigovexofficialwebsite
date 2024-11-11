import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ErrorBoundary from '../src/Components/common/ErrorBoundary';
import NavigationBar from '../src/Components/Layout/NavigationBar';
import Footer from '../src/Components/Layout/Footer';
import { routes } from '../src/routes/routes.config';

// Styles
import './index.css';

// Create an AnimatedRoutes component
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Router>
        <NavigationBar />
        <div className="main-content">
          <AnimatedRoutes />
        </div>
        <Footer />
      </Router>
    </ErrorBoundary>
  </React.StrictMode>
);

// Optional: Performance monitoring
if (process.env.NODE_ENV === 'production') {
  const reportWebVitals = require('./reportWebVitals').default;
  reportWebVitals(console.log);
}
