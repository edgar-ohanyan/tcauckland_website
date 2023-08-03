import React from "react";
import home_bg from "../../assets/pictures/bg_home.jpg";

export default function index() {
  return (
    <div>
      <div className="main-picture-box">
        <img src={home_bg} className="main-picture" alt="home_bg" />
      </div>
    </div>
  );
}
