import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

import home from "../../assets/background/Work Place Training Photo.jpg";
import './WorkplaceTraining.css';

const WorkplaceTraining = () => {
  return (
    <div className="workplace-training">
        <div className="service-banner">
                <LazyLoadImage src={home} className="main-picture" alt="home_bg" />
               
            </div>
      <h1 className="heading">Workplace Training</h1>
      
      <div className="intro">
        <p>
          At The Collaborative, our mission is to support you as you move into the workplace environment, and we offer a range of programs and courses to prepare you for your future career. Our courses will provide you with the necessary key skills and understanding to enable you to work safely within your new environment and to understand the impact your actions and decision-making can have on your organisation.
        </p>
      </div>

      <div className="approach">
        <h2>Our Workplace Training Approach</h2>
        <p>
          Our approach is flexible around your workplace demands and includes:
        </p>
        
        <div className="section">
          <h3>Together</h3>
          <p>
            Our courses are tailored to all levels of the organisation and grow with you as you develop in your career. From providing you with firm foundations as you start your journey to bespoke and tailored role-specific programs to support you in your areas of expertise, we work with you on your path to success.
          </p>
        </div>

        <div className="section">
          <h3>Teaching</h3>
          <p>
            All our courses have been meticulously developed and optimised to provide you with the best delivery method. We understand that time is precious, and we cannot always dedicate work time to attending training programs. We have tailored our programs to allow for online self-directed learning where possible so you can learn conveniently. Other courses take a hybrid approach to delivery, where an online instructor will guide you. At the highest level of qualification, we provide classroom-based learning, where subject matter experts with a wealth of experience in your chosen fields will guide and instruct you.
          </p>
        </div>

        <div className="section">
          <h3>Transforming</h3>
          <p>
            Through our learning and development packages, we are always there to support you as you grow in your career. Together, we will help you achieve your goals and reach your true potential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkplaceTraining;
