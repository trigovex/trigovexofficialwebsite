import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './TestimonialCarousel.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    company: "INSPIRE FROM BOOKS",
    logo: "https://yt3.googleusercontent.com/pdHP9FkxmAGCMldaFq2iZbdtC3R2owXoR6UCellrgUCnovge2MoM_jgPtD6QYFkU2BsE3Qcxyw=s160-c-k-c0x00ffffff-no-rj",
    rating: 5,
    feedback: "Incredible service and support throughout the entire project. The team was always available to address our concerns and provided valuable insights. Their expertise in the field was evident, and they guided us every step of the way.",
  },
  {
    company: "MY HOMEDEL",
    logo: "https://trigovex.com/assets/img/section-img/MyHomeDel.jpg",
    rating: 5,
    feedback: "Exceptional assistance and prompt delivery of all project needs. The communication was clear and consistent, which made the process smooth. They took the time to understand our requirements and delivered beyond our expectations.",
  },
  {
    company: "PRANALI EYE CARE HOSPITAL",
    logo: "https://cdn5.vectorstock.com/i/1000x1000/92/04/eye-care-logo-template-vector-12209204.jpg",
    rating: 5,
    feedback: "Skilled approach and clear communication made the project a triumph. The team was proactive in identifying potential challenges and offered effective solutions. Their professionalism and commitment to quality were evident.",
  },
  {
    company: "HOFFEN PLASTICS",
    logo: "https://trigovex.com/assets/img/section-img/HoffenPlastics.png",
    rating: 5,
    feedback: "Fantastic collaboration and quick responses throughout the project. The team was always ready to adapt to our changing needs and provided innovative solutions. Their attention to detail and commitment to excellence were truly impressive.",
  },
  {
    company: "KARTHIKEYA",
    logo: "https://i.pinimg.com/736x/16/8e/d3/168ed37e1cc055c818b99ff94c77bac0.jpg",
    rating: 5,
    feedback: "Remarkable outcomes and superb communication. They surpassed our expectations in every aspect, from planning to execution. The team's expertise and dedication were evident in the quality of their work. We appreciated their willingness.",
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

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
    <div className="container py-5" data-aos="fade-up">
      <h1 className="text-center mb-5" style={{ 
        fontFamily: 'Poppins', 
        fontWeight: '600',
        paddingBottom: '50px',
        fontSize: '2.5rem',
        paddingTop: '20px',
      }}>
        What Our Clients Say
      </h1>
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          {groupedTestimonials.map((group, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="row justify-content-center">
                {group.map((testimonial, idx) => (
                  <div className="col-md-4 col-12 mb-4" key={idx} data-aos="fade-up">
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
