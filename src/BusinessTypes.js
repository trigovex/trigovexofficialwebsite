import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import line from './images/line.svg';
import image from './images/timelinelottie.json';
import { Player } from '@lottiefiles/react-lottie-player';

const BusinessTypes = () => {
  // Add window width state
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define inline styles
  const containerStyle = {
    padding: '30px',
    position: 'relative',
    overflow: 'hidden',
  };

  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.35,
    zIndex: 0,
  };

  const contentWrapperStyle = {
    position: 'relative',
    zIndex: 1,
  };

  const itemStyle = {
    display: 'flex',
    alignItems: 'flex-start', // Align items at the start
    borderBottom: '1px solid #ccc', // Horizontal line between items
    paddingBottom: '20px', // Padding below the item
    marginBottom: '20px', // Margin below the item for spacing
  };

  const numberStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginRight: '1rem',
  };

  const contentStyle = {
    flex: 1, // Allow the content to take the remaining space
  };

  const headingStyle = {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    margin: 0, // Remove default margin for better alignment
  };

  return (
    <div className="container mt-5" style={containerStyle}>
      {windowWidth > 768 && ( // Only render background if not mobile
        <div style={backgroundStyle}>
          <Player
            autoplay
            loop
            src={image}
            style={{ 
              height: '100%', 
              width: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      )}

      <div style={contentWrapperStyle}>
        <h1 style={{ textAlign: 'center', fontSize:'2.8rem' }}>Bring Innovation Together!</h1>
        <img 
          src={line} 
          alt="Horizontal Line" 
          style={{ 
            display: 'block', 
            margin: '20px auto',
            maxWidth: '100%',
            height: 'auto',
            paddingBottom: '40px'
          }} 
        />
        
        <div className="row">
          <div className="col-md-6 mb-5"> 
            {/* Item 1 */}
            <div style={itemStyle}>
              <h2 style={numberStyle}>1.</h2>
              <div style={contentStyle}>
                <h3 style={headingStyle}>Startup Ventures</h3>
                <p style={descriptionStyle}>
                  Have limited resources and tight budget constraints? No worries! Our experts can provide essential tech support to transform your innovative ideas into reality. We help startups navigate challenges and turn ideas into viable products, ensuring that you can focus on growth and innovation without worrying.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-5"> 
            {/* Item 2 */}
            <div style={itemStyle}>
              <h2 style={numberStyle}>2.</h2>
              <div style={contentStyle}>
                <h3 style={headingStyle}>Small Scale Enterprises</h3>
                <p style={descriptionStyle}>
                  Our specialists are skilled at developing your brand identity while merging their experience to meet your development needs. We work closely with small enterprises to understand their unique challenges and provide tailored solutions that drive success in their respective markets.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-5"> 
            {/* Item 3 */}
            <div style={itemStyle}>
              <h2 style={numberStyle}>3.</h2>
              <div style={contentStyle}>
                <h3 style={headingStyle}>Large Enterprises</h3>
                <p style={descriptionStyle}>
                  We assist enterprise-level businesses in broadening their market reach and optimizing processes using the latest technology. Our solutions are designed to enhance efficiency and foster innovation, ensuring that your business remains competitive in an ever-evolving marketplace.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-5"> 
            {/* Item 4 */}
            <div style={itemStyle}>
              <h2 style={numberStyle}>4.</h2>
              <div style={contentStyle}>
                <h3 style={headingStyle}>Agency Services</h3>
                <p style={descriptionStyle}>
                  Expand your agency’s potential by harnessing our development skills and the latest tech trends.<br/> We provide comprehensive support that enables agencies to streamline operations and maximize their offerings, ultimately delivering enhanced value to clients.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom SVG image */}
        <img 
          src={line} 
          alt="Horizontal Line" 
          style={{ 
            display: 'block', 
            margin: '20px auto', 
            transform: 'scaleX(-1)', // Reverse the SVG image
            maxWidth: '100%', // Ensure it scales down on mobile
            height: 'auto', // Maintain aspect ratio
          }} 
        />
      </div>
    </div>
  );
};

export default BusinessTypes;
