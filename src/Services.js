import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css';

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="finance-info-section">
      <div className="finance-header">
        <h2>Our <span className="highlight">Services</span></h2>
      </div>

      <div className="finance-container">
        <div className="finance-card" data-aos="fade-right" data-aos-duration="1000">
          <div className="card-overlay"></div>
          <img
            src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?t=st=1732098216~exp=1732101816~hmac=ecc69fdba142cc7c0856c91c246052f781d2638d513a5cd5b9eeeddccad8abc9&w=740"
            alt="Personal Finance"
          />
          <div className="card-content">
            <h3>Website Development</h3>
            <p>
            Creating and maintaining websites and web applications using the latest technologies and frameworks.
            </p>
            <button className="learn-more">Contact Us →</button>
          </div>
        </div>

        <div className="finance-card" data-aos="fade-right" data-aos-duration="1000">
          <div className="card-overlay"></div>
          <img
          src="https://img.freepik.com/free-photo/smartphone-with-user-interface-concept_52683-104212.jpg?t=st=1732101276~exp=1732104876~hmac=2d6c953b36344b2114ed8af06ea0e60aacafa1adb01c17c6b98a45089be9d7cb&w=826"
            alt="Investment Planning"
          />
          <div className="card-content">
            <h3>App Development</h3>
            <p>
            Designing and developing mobile applications for both Android and iOS platforms using modern technologies.
            </p>
            <button className="learn-more">Contact Us →</button>
          </div>
        </div>

        <div className="finance-card" data-aos="fade-right" data-aos-duration="1000">
          <div className="card-overlay"></div>
          <img
            src="https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149371586.jpg?t=st=1732102224~exp=1732105824~hmac=8f10b3291f447950e7c537cb606137f50d40d066a8a622789e082bc6860241a2&w=996"
            alt="Market Analysis"
          />
          <div className="card-content">
            <h3>DevOps Solutions</h3>
            <p>
            Streamlining and automating the development, deployment, and operations processes for faster delivery.
            </p>
            <button className="learn-more">Contact Us →</button>
          </div>
        </div>
        <div className="finance-card" data-aos="fade-left" data-aos-duration="1000">
          <div className="card-overlay"></div>
          <img
          src="https://img.freepik.com/free-vector/safe-data-storage-service-cloud_1284-32735.jpg?t=st=1732103156~exp=1732106756~hmac=ce44f8c2061dbf27c4c3ff8a21d7b66fb88ed277db6533a44d494064f245f37a&w=900"
            alt="Personal Finance"
          />
          <div className="card-content">
            <h3>Cloud Computing</h3>
            <p>
            Leveraging cloud infrastructure to build scalable and cost-efficient applications while ensuring data security.
            </p>
            <button className="learn-more">Contact Us →</button>
          </div>
        </div>

        <div className="finance-card" data-aos="fade-left" data-aos-duration="1000">
          <div className="card-overlay"></div>
          <img
          src="https://img.freepik.com/premium-vector/ui-ux-infographic-dashboard-ui-design-with-graphs-charts-diagrams-web-interface-template_110554-967.jpg?w=996"
            alt="Investment Planning"
          />
          <div className="card-content">
            <h3>Custom Softwares</h3>
            <p>
            Developing tailored software solutions to meet specific business needs and improve operational efficiency.
            </p>
            <button className="learn-more">Contact Us →</button>
          </div>
        </div>

        <div className="finance-card" data-aos="fade-left" data-aos-duration="1000">
          <div className="card-overlay"></div>
          <img
           src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?t=st=1732102751~exp=1732106351~hmac=df5c063eb3f1773d8041d5f73868275b4cba171e1edae63af427f8da42892f08&w=996"            alt="Market Analysis"
          />
          <div className="card-content">
            <h3>UX/UI Design</h3>
            <p>
            Crafting user-friendly interfaces and providing seamless user experiences for web and mobile applications.
            </p>
            <button className="learn-more">Contact Us →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;