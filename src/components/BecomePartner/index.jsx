import React from "react";
import home_bg from "../../assets/photos/Find a Job.jpg";

import journey_clients from "../../assets/pictures/journey_clients.jpg";

import "./BecomePartner.css";

export default function index() {
  return (
    <div>
      <div className="main-picture-box">
        <img src={home_bg} className="main-picture" alt="home_bg" />
      </div>
      <div className="page-content">
        <div className="picBox">
          <img src={journey_clients} alt="journey_clients" />
        </div>
      </div>
    </div>
  );
}
