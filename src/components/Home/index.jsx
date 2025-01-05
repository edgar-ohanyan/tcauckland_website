import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import home from "../../assets/background/home4.jpeg";
import applyToStud from "../../assets/card_size_pic/Apply to study.jpg";
import findAJob from "../../assets/card_size_pic/Employee.jpg";
import employee from "../../assets/card_size_pic/Find a Job.jpg";
import OurServices from "../OurServices/index";

import "./home.css";

export default function Home() {
  return (
    <div>

<div className="image-overlay-container">
  <LazyLoadImage 
    src={home} 
    className="main-picture bannerImage" 
    alt="home_bg" 
  />
  <div className="image-text-overlay">
    <h4>The Collaborative offers a comprehensive suite of services</h4>
    <p>
      from connecting international students with universities to enhance enrollment, to placing educators in leading teaching roles and offering accredited professional training programs.
    </p>
  </div>
</div>

      <OurServices></OurServices>

      <div className="home-content">
        <Link to="/apply-for-study" className="card-nav-link">
          <div className="home-card">
            <div className="home-card-header">
              <h4 className="card-title">Apply To Study</h4>
            </div>
            <div className="home-card-body">
              <LazyLoadImage
                className="card-image"
                src={applyToStud}
                alt="Apply to study"
              />
            </div>
          </div>
        </Link>

        <Link to="/find-a-job" className="card-nav-link">
          <div className="home-card">
            <div className="home-card-header">
              <h4 className="card-title">Find A Job</h4>
            </div>
            <div className="home-card-body">
              <LazyLoadImage
                className="card-image"
                src={findAJob}
                alt="Find a job"
              />
            </div>
          </div>
        </Link>

        <Link to="/become-partner" className="card-nav-link">
          <div className="home-card">
            <div className="home-card-header">
              <h4 className="card-title">Corporate</h4>
            </div>
            <div className="home-card-body">
              <LazyLoadImage
                className="card-image"
                src={employee}
                alt="Find a Job"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
