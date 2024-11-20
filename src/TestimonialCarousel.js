import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './TestimonialCarousel.css';

const testimonials = [
  {
    company: "INSPIRE FROM BOOKS",
    logo: "https://yt3.googleusercontent.com/pdHP9FkxmAGCMldaFq2iZbdtC3R2owXoR6UCellrgUCnovge2MoM_jgPtD6QYFkU2BsE3Qcxyw=s160-c-k-c0x00ffffff-no-rj",
    rating: 5,
    feedback:
      "Trigovex Technologies was able to communicate effectively with the client, delivering on all project requirements. The client notes that Trigovex works well as a team and is very responsive.",
  },
  {
    company: "MY HOMEDEL",
    logo: "https://trigovex.com/assets/img/section-img/MyHomeDel.jpg",
    rating: 5,
    feedback:
      "Trigovex Technologies was able to communicate effectively with the client, delivering on all project requirements. The client notes that Trigovex works well as a team and is very responsive.",
  },
  {
    company: "PRANALI EYE CARE HOSPITAL",
    logo: "https://cdn5.vectorstock.com/i/1000x1000/92/04/eye-care-logo-template-vector-12209204.jpg",
    rating: 5,
    feedback:
      "Trigovex Technologies was able to communicate effectively with the client, delivering on all project requirements. The client notes that Trigovex works well as a team and is very responsive.",
  },
  {
    company: "HOFFEN PLASTICS",
    logo: "https://trigovex.com/assets/img/section-img/HoffenPlastics.png",
    rating: 5,
    feedback:
      "Trigovex Technologies was able to communicate effectively with the client, delivering on all project requirements. The client notes that Trigovex works well as a team and is very responsive.",
  },
  {
    company: "KARTHIKEYA",
    logo: "https://i.pinimg.com/736x/16/8e/d3/168ed37e1cc055c818b99ff94c77bac0.jpg",
    rating: 5,
    feedback:
      "Trigovex Technologies was able to communicate effectively with the client, delivering on all project requirements. The client notes that Trigovex works well as a team and is very responsive.",
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
    <div className="container py-5">
      <h1 className="text-center mb-5" style={{ 
        fontFamily: 'Poppins', 
        fontWeight: '600',
        paddingBottom: '50px',
        fontSize: '2.5rem'
      }}>
        What Our Clients Say
      </h1>
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          {groupedTestimonials.map((group, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="row justify-content-center">
                {group.map((testimonial, idx) => (
                  <div className="col-md-4 col-12 mb-4" key={idx}>
                    <div className="card testimonial-card">
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={testimonial.logo}
                          alt={`${testimonial.company} Logo`}
                          className="rounded-circle me-3"
                          width="80"
                          height="80"
                          style={{ objectFit: "cover" }}
                        />
                        <div>
                          <h5 style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                            {testimonial.company}
                          </h5>
                          <div className="text-warning" style={{ fontSize: "0.9rem" }}>
                            <span className="me-1">★★★★★</span>
                            <span style={{ color: "#666" }}>{testimonial.rating}.0 Ratings</span>
                          </div>
                        </div>
                      </div>
                      <p style={{ fontSize: "0.95rem" }}>{testimonial.feedback}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Add carousel indicators (dots) */}
        <div className="carousel-indicators">
          {groupedTestimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

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
