import React from "react";
import { Link } from "react-router-dom";
import home_bg from "../../assets/pictures/generalPhoto.jpg";
import applyToStud from "../../assets/photos/Apply to study.jpg";
import employee from "../../assets/photos/Employee.jpg";
import findAJob from "../../assets/photos/Find a Job.jpg";

import "./home.css";

export default function Home() {
  return (
    <div>
      <div className="main-picture-box">
        <img src={home_bg} className="main-picture" alt="home_bg" />
      </div>
      <div className="home-content">
        <Link to="/apply-for-study" className="card-nav-link">
          <div className="home-card">
            <div className="home-card-title-box">
              <h4 className="card-title">Apply To Study</h4>
            </div>
            <div className="home-card-pic-box">
              <img
                className="card-pic"
                src={applyToStud}
                alt="Apply to study"
              />
            </div>
          </div>
        </Link>
        <Link to="/find-a-job" className="card-nav-link">
          <div className="home-card">
            <div className="home-card-title-box">
              <h4 className="card-title">Find A Job</h4>
            </div>
            <div className="home-card-pic-box">
              <img className="card-pic" src={employee} alt="Employee" />
            </div>
          </div>
        </Link>
        <Link to="/become-partner" className="card-nav-link">
          <div className="home-card">
            <div className="home-card-title-box">
              <h4 className="card-title">Employer</h4>
            </div>
            <div className="home-card-pic-box">
              <img className="card-pic" src={findAJob} alt="Find a Job" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
