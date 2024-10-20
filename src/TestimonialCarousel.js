import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './TestimonialCarousel.css';

const testimonials = [
  {
    company: "TRIGOVEX TECHNOLOGIES",
    logo: "https://media.licdn.com/dms/image/D4D03AQEQujwvNkQ2VQ/profile-displayphoto-shrink_200_200/0/1719767758250?e=2147483647&v=beta&t=q0OtRXVPzP2igx77HeuBFcm63rQH7eUCnNGm_EORUOk",
    rating: 5,
    feedback:
      "Hyperlink InfoSystem was able to communicate effectively with the client, delivering on all project requirements. The client notes that Hyperlink works well as a team and is very responsive.",
  },
  {
    company: "Todotix",
    logo: "https://media.licdn.com/dms/image/D4D03AQEQujwvNkQ2VQ/profile-displayphoto-shrink_200_200/0/1719767758250?e=2147483647&v=beta&t=q0OtRXVPzP2igx77HeuBFcm63rQH7eUCnNGm_EORUOk",
    rating: 5,
    feedback:
      "Hyperlink InfoSystem was able to communicate effectively with the client, delivering on all project requirements. The client notes that Hyperlink works well as a team and is very responsive.",
  },
  {
    company: "021 Food",
    logo: "https://media.licdn.com/dms/image/D4D03AQEQujwvNkQ2VQ/profile-displayphoto-shrink_200_200/0/1719767758250?e=2147483647&v=beta&t=q0OtRXVPzP2igx77HeuBFcm63rQH7eUCnNGm_EORUOk",
    rating: 5,
    feedback:
      "Hyperlink InfoSystem was able to communicate effectively with the client, delivering on all project requirements. The client notes that Hyperlink works well as a team and is very responsive.",
  },
  {
    company: "Fun Com",
    logo: "https://media.licdn.com/dms/image/D4D03AQEQujwvNkQ2VQ/profile-displayphoto-shrink_200_200/0/1719767758250?e=2147483647&v=beta&t=q0OtRXVPzP2igx77HeuBFcm63rQH7eUCnNGm_EORUOk",
    rating: 5,
    feedback:
      "Hyperlink InfoSystem was able to communicate effectively with the client, delivering on all project requirements. The client notes that Hyperlink works well as a team and is very responsive.",
  },
  {
    company: "New Company",
    logo: "https://media.licdn.com/dms/image/D4D03AQEQujwvNkQ2VQ/profile-displayphoto-shrink_200_200/0/1719767758250?e=2147483647&v=beta&t=q0OtRXVPzP2igx77HeuBFcm63rQH7eUCnNGm_EORUOk",
    rating: 5,
    feedback:
      "Hyperlink InfoSystem was able to communicate effectively with the client, delivering on all project requirements. The client notes that Hyperlink works well as a team and is very responsive.",
  }
];

// Helper function to group testimonials based on chunk size
const chunkTestimonials = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const TestimonialCarousel = () => {
  const [chunkSize, setChunkSize] = useState(3); // Default to 3 for larger screens

  // Update chunk size based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setChunkSize(1); // 1 testimonial per slide on mobile
      } else {
        setChunkSize(3); // 3 testimonials per slide on larger screens
      }
    };

    handleResize(); // Set the initial size
    window.addEventListener('resize', handleResize); // Adjust on screen resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup event listener
    };
  }, []);

  const groupedTestimonials = chunkTestimonials(testimonials, chunkSize); // Group testimonials

  return (
    <div className="container">
      <h1 className="text-center mb-4" style={{ fontFamily: 'Poppins', fontWeight: '600',paddingBottom:'50px' }}>
        What Our Clients Say
      </h1> {/* Title */}
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          {groupedTestimonials.map((group, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="row justify-content-center"> {/* Center content */}
                {group.map((testimonial, idx) => (
                  <div className="col-md-4 col-12" key={idx}> {/* Use col-12 for mobile */}
                    <div className="card testimonial-card p-4">
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={testimonial.logo}
                          alt={`${testimonial.company} Logo`}
                          className="rounded-circle me-3"
                          width="100"
                          height="100"
                          style={{ objectFit: "cover" }}
                        />
                        <div>
                          <h5 className="mb-0" style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                            {testimonial.company}
                          </h5>
                          <p className="text-warning mb-0" style={{ fontSize: "0.95rem", color: "#666" }}>
                            <span className="me-1">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 
                            {testimonial.rating}.0 Ratings
                          </p>
                        </div>
                      </div>
                      <p style={{ fontSize: "0.95rem", color: "#666" }}>{testimonial.feedback}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Add Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};


export default TestimonialCarousel;
