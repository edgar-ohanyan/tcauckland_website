import React from 'react';
import './ProfessionalDevelopment.css'
import { LazyLoadImage } from "react-lazy-load-image-component";

import home from "../../assets/background/Work Place Training Photo.jpg";
const ProfessionalDevelopment = () => {
  return (
    <div className="professional-development">
        <div className="service-banner">
                <LazyLoadImage src={home} className="main-picture" alt="home_bg" />
               
            </div>
      <h1>Professional Development Programs</h1>

      <section className="overview">
        <h2>Collaborative Leadership and Teaching Training</h2>
        <p>
          The Collaborative leadership and teaching training programs are meticulously crafted to foster effective and visionary management within educational institutions. Our commitment is to empower educators, school administrators, and middle senior leadership roles with the knowledge, skills, and mindset necessary to navigate the dynamic landscape of the education sector.
        </p>
      </section>

      <section className="training-offerings">
        
        <div className="offering">
          <h3>Tailored Training Program</h3>
          <ul>
            <li><strong>Customised to Meet Your Needs:</strong> Each training program is tailored to address the specific challenges and opportunities unique to your institution.</li>
            <li><strong>Interactive and Engaging:</strong> Our training sessions are dynamic and interactive, designed to keep participants engaged and motivated.</li>
          </ul>
        </div>

        <div className="offering">
          <h3>Comprehensive Curriculum</h3>
          <ul>
            <li><strong>Strategic Leadership Development:</strong> Learn to craft strategic plans that align with your school’s mission and enhance educational outcomes.</li>
            <li><strong>Effective Communication and Team Building:</strong> Develop skills to improve transparency, foster collaboration, and build a positive school culture.</li>
            <li><strong>Change Management:</strong> Equip yourself with tools to manage and lead change effectively, ensuring your institution remains adaptable and resilient.</li>
          </ul>
        </div>

        <div className="offering">
          <h3>Expert Facilitators</h3>
          <p>
            Our trainers are seasoned education professionals with extensive leadership training experience. They bring real-world insights into the classroom, offering practical advice and proven strategies.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalDevelopment;
