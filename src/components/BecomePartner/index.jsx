import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import employer from "../../assets/background/Employer.jpg";
import journey_clients from "../../assets/background/journey_clients.jpg";

import "./BecomePartner.css";

export default function index() {
  return (
    <div>
      <div className="main-picture-box">
        <LazyLoadImage src={employer} className="main-picture" alt="home_bg" />
      </div>
      <div className="page-content">
        <div className="picBox">
          <LazyLoadImage src={journey_clients} alt="journey_clients" />
        </div>
      </div>
    </div>
  );
}
