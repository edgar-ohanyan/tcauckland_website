import React from 'react';
import './SchoolPartnerships.css'
import { LazyLoadImage } from "react-lazy-load-image-component";

import home from "../../assets/background/Work Place Training Photo.jpg";
const SchoolPartnerships = () => {
  return (
    <div className="school-partnerships">
        <div className="service-banner">
                <LazyLoadImage src={home} className="main-picture" alt="home_bg" />
               
            </div>
      <h1>New Schools and School Acquisitions</h1>

      <section className="partners">
        <h2>Partners</h2>
        <p>
        At the Collaborative, We have an extensive portfolio of UK, USA, Australian, and New Zealand school partnerships, many of whom have expressed a firm interest in expanding globally. Our partners include well-known and established independent schools and hugely successful academies. We will match school and funding partners based on shared vision, ambition, and values.
        </p>
      </section>

      <section className="feasibility-design">
        <h2>School Feasibility & Design</h2>
        <p>
          We have established relationships with several school architects in the region. They possess extensive international experience and a comprehensive skill set essential for school development. Not only can we handle the intricate aspects of detailed design and drafting, but our partners also possess a profound understanding of shaping a school concept. This understanding ensures that functionality and movement are seamlessly integrated, forming the foundation of every spatial decision. Our proficiency extends to producing designs encompassing grand ideas, and our partners excel in value engineering for any proposal.
        </p>
      </section>

      <section className="planning-benchmarking">
        <h2>Planning and Benchmarking Tools</h2>
        <p>
          Refined through extensive application across diverse countries and various market segments, our tools for planning and benchmarking are tailored for establishing and growing schools. Our toolkit encompasses resources for initiating a new educational institution, navigating the subsequent growth phases, or restructuring finances to restore a school to a stable and sustainable foundation.
        </p>
      </section>

      <section className="resources-financials">
        <h2>Resources and Financials</h2>
        <p>
          We provide tools and expertise to aid schools in analysing their timetables, staff deployment, and space utilisation. Our team is keenly aware of the financial intricacies unique to different types of schools, whether high-fee, low-fee, profit-making, or not-for-profit. We acknowledge the significance of rental expenses, particularly with buildings and land, within the operational framework of schools. Leveraging our extensive knowledge base, we stand ready to assist schools in optimising their resources and realising their objectives.
        </p>
      </section>
    </div>
  );
};

export default SchoolPartnerships;
