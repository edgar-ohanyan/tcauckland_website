import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import home3 from "../../assets/background/Home3.jpg";

import "./BecomePartner.css";

export default function index() {
  return (
    <div className="training-container">
      <h1 className="training-title">Corporate Leadership Training</h1>
      <div className="service-banner">
                <LazyLoadImage src={home3} className="main-picture" alt="home_bg" />
               
            </div>
      <section className="section">
        <h2 className="section-title">Develop Organisational Capability</h2>
        <p className="section-text">
          Partner with the most prestigious universities and Business Schools from the UK, USA, Australia, and New Zealand to create meaningful impact and develop critical capabilities for a better future. From focused short courses to long-term leadership development, we offer programmes tailored to your organisation’s needs and culture.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Building Organisations That Thrive in a Disruptive World</h2>
        <p className="section-text">
          Partner with us to co-create a transformative program that builds your organisation’s capability, drives change, and embeds a growth mindset. We bring creativity and experience working with organisations across all sectors to address the unique opportunities and challenges specific to your workplace, context, and culture. The result is a unique ‘customer-focused’ program that will immediately impact your business. We can work with you locally – online, on campus, or at your organisation.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Become an Aspirational Leader</h2>
        <p className="section-text">
          Leadership is enacted at all levels of an organisation and is not just the domain of those in senior positions. The complexity of today’s world, coupled with the pace of change, calls for aware, inquisitive, and agile leaders. This program will expose you to new perspectives on leadership and develop critical practices that support effective leadership.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Leadership Mindset for Middle Managers</h2>
        <p className="section-text">
          Enhance your impact and drive sustainable results for your organisation and career with our Leadership Mindset for Middle Managers program.
        </p>

        <h3 className="subsection-title">Course Overview</h3>
        <p className="section-text">
          Middle managers are often the unsung heroes of an organisation, bridging the gap between vision and execution. They are the drivers of operational excellence, the nurturers of talent, and the glue that holds teams together. In an ever-evolving business landscape, their leadership, decision-making, communication, and adaptability are vital in transforming strategic objectives into tangible achievements.
        </p>
        <p className="section-text">
          This interactive programme equips mid-career professionals with the knowledge, capability, and confidence to navigate the unique challenges of middle management and enhance their leadership effectiveness in a rapidly changing world.
        </p>

        <h3 className="subsection-title">Course Structure and Topics Covered</h3>
        <ul className="course-list">
          <li>Recognise and challenge common assumptions about leadership.</li>
          <li>Learn from experienced facilitators, programme peers, and guest speakers.</li>
          <li>Practice and embed new learning in their own organisations.</li>
          <li>Acquire tools, frameworks, and practices that will contribute to longer-term, sustained impact.</li>
        </ul>
      </section>
    </div>
  );
}
