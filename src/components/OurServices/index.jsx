import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const OurServicesPage = () => {


  return (
    <div className="services-page">
    <h3 className="p-3">Our Services</h3>
    <div className="services-list">
  <Link to={`/new-schools-and-school-acquisitions`} className="service-card-link">
    <div className="service-card">
      <h4 class="card-title" >New Schools and School Acquisitions</h4>
      <p>We have an extensive portfolio of UK, USA, Australian, and New Zealand school partnerships, many of whom have expressed a firm interest in expanding globally. Our partners include well-known and established independent schools and hugely successful academies. We will match school and funding partners based on shared vision, ambition, and values.</p>
      <span className="read-more">Read More</span>
    </div>
  </Link>

  <Link to={`/leadership-training`} className="service-card-link">
    <div className="service-card">
      <h4 class="card-title">Professional Development Programs</h4>
      <p>At the Collaborative leadership and teaching training programs are meticulously crafted to foster effective and visionary management within educational institutions. Our commitment is to empower educators, school administrators, and middle senior leadership roles with the knowledge, skills, and mindset necessary to navigate the dynamic landscape of the education sector.</p>
      <span className="read-more">Read More</span>
    </div>
  </Link>

  <Link to={`/school-improvement-evaluation`} className="service-card-link">
    <div className="service-card">
      <h4 class="card-title">School Improvement & Evaluation</h4>
      <p>At The Collaborative, our suite of school improvement services, is designed to be versatile, catering to the unique needs of each institution. Schools can either opt for tailor-made services crafted to address their specific challenges or choose from a range of training topics to focus on areas requiring improvement strategically. For institutions seeking long-term school improvement support, collaboration with our expert team allows for capacity-building in various critical areas.</p>
      <span className="read-more">Read More</span>
    </div>
  </Link>

  <Link to={`/workplace-training`} className="service-card-link">
    <div className="service-card">
      <h4 class="card-title">Workplace Training</h4>
      <p>At The Collaborative, our mission is to support you as you move into the workplace environment, and we offer a range of programs and courses to prepare you for your future career. Our courses will provide you with the necessary key skills and understanding to enable you to work safely within your new environment and to understand the impact your actions and decision-making can have on your organisation. Our Workplace Training approach is flexible around your workplace demands.</p>
      <span className="read-more">Read More</span>
    </div>
  </Link>
</div>

  </div>
  
  );
};

export default OurServicesPage;
