import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import './Contact.css'; // Import the external CSS file

export default function ContactForm() {
  const headingRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send email logic here
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'trigovextechnologies@gmail.com',
        ...formData,
      }),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      // Optionally reset the form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } else {
      alert('Failed to send message.');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        }
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-section">
      <div className="container">
        <div className="max-width">
          <div className="header">
            <h1 className="sec-head">
            Get In Touch
            </h1>
            <p className="sub-heading">
              Have questions about our services? We're here to help. Contact us and our team will get back to you shortly.
            </p>
          </div>

          <div className="grid-container">
            {/* Contact Information */}
            <div className="contact-info">
              <div className="info-content">
                <h3 className="info-title">Contact Information</h3>
                <div className="info-item">
                  <div className="icon-wrapper">
                    <Phone />
                  </div>
                  <div>
                    <p className="info-label">Phone</p>
                    <p className="info-detail">+91 7799001866 , 7995534388</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="icon-wrapper">
                    <Mail />
                  </div>
                  <div>
                    <p className="info-label">Email</p>
                    <p className="info-detail">contact@trigovex.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="icon-wrapper">
                    <MapPin />
                  </div>
                  <div>
                    <p className="info-label">Address</p>
                    <p className="info-detail">Near Lock Down, Palakollu, 534260</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="icon-wrapper">
                    <Clock />
                  </div>
                  <div>
                    <p className="info-label">Business Hours</p>
                    <p className="info-detail">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 follow-us">
  <h4 className="font-medium mb-4">Follow Us</h4>
  <div className="flex space-x-4">
    {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
      <a
        key={social}
        href={`https://${social}.com`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500/30 p-2 rounded-lg hover:bg-blue-500/50 transition-colors"
      >
        <img
          src={`https://api.iconify.design/simple-icons/${social}.svg?color=white`}
          alt={social}
          className="w-5 h-5"
        />
      </a>
    ))}
  </div>
</div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="TRIGOVEX" />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="TECHNOLOGIES" />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="contact@trigovex.com" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 9876543210" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help you?" />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Write your message here..."></textarea>
                </div>

                <button type="submit" className="submit-button">
                  <span>Send Message</span>
                  <Send />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
