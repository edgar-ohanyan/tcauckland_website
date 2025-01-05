import React from 'react';
import './AssessmentFeedback.css';
import { LazyLoadImage } from "react-lazy-load-image-component";

import home from "../../assets/images/service.jpg";
const AssessmentFeedback = () => {
  return (
    <div className="assessment-feedback">
        <div className="service-banner">
                <LazyLoadImage src={home} className="main-picture" alt="home_bg" />
               
            </div>
      <h1 className="heading">Assessment and Feedback</h1>
      
      <div className="intro">
        <p>
          At The Collaborative, our suite of school improvement services is designed to be versatile, catering to the unique needs of each institution. Schools can either opt for tailor-made services crafted to address their specific challenges or choose from a range of training topics to focus on areas requiring improvement strategically. For institutions seeking long-term school improvement support, collaboration with The Collaborative expert team allows for capacity-building in various critical areas:
        </p>
      </div>

      <div className="services">
        <div className="service">
          <h2>Supporting Students’ Learning</h2>
          <ul>
            <li>Personalised strategies for student engagement and academic success.</li>
            <li>Implementation of effective learning support programs.</li>
          </ul>
        </div>
        <div className="service">
          <h2>Assessment and Feedback Enhancement</h2>
          <ul>
            <li>Comprehensive assessment frameworks and methodologies.</li>
            <li>Development of robust feedback mechanisms to inform teaching practices.</li>
          </ul>
        </div>
        <div className="service">
          <h2>Improving Teaching</h2>
          <ul>
            <li>Targeted professional development for educators.</li>
            <li>Pedagogical strategies to enhance classroom instruction.</li>
          </ul>
        </div>
        <div className="service">
          <h2>Curriculum Development</h2>
          <ul>
            <li>Customised curriculum design to meet specific educational goals.</li>
            <li>Integration of innovative and up-to-date educational practices.</li>
          </ul>
        </div>
        <div className="service">
          <h2>Professional Learning</h2>
          <ul>
            <li>Ongoing professional development opportunities for faculty and staff.</li>
            <li>Programs to keep educators abreast of the latest educational trends and methodologies.</li>
          </ul>
        </div>
        <div className="service">
          <h2>Middle and Senior Leadership Development</h2>
          <ul>
            <li>Leadership training programs to foster effective management.</li>
            <li>Mentorship and coaching for middle and senior leadership roles.</li>
          </ul>
        </div>
        <div className="service">
          <h2>Inspection Preparation</h2>
          <ul>
            <li>Guidance and support in preparation for educational inspections.</li>
            <li>Comprehensive review of policies and practices to meet inspection standards.</li>
          </ul>
        </div>
        <div className="service">
          <h2>Self-Evaluation</h2>
          <ul>
            <li>Tools and frameworks for schools to conduct internal assessments.</li>
            <li>Assistance in establishing effective self-evaluation processes.</li>
          </ul>
        </div>
        <div className="service">
          <h2>Governance Enhancement</h2>
          <ul>
            <li>Training for school board members and administrators.</li>
            <li>Strategic guidance for effective governance practices.</li>
          </ul>
        </div>
      </div>

     
    </div>
  );
};

export default AssessmentFeedback;
