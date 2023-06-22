import React from "react";
import "./home.css";

import home_bg from "../../assets/pictures/bg_home.jpg";
import card_pic_1 from "../../assets/pictures/image_1.jpg";
import card_pic_2 from "../../assets/pictures/image_2.jpg";
import card_pic_3 from "../../assets/pictures/image_3.jpg";

export default function Home() {
  return (
    <div>
      <div className="main-picture-box">
        <img src={home_bg} className="main-picture" alt="home_bg" />
      </div>
      <div className="home-content">
        <div className="home-card">
          <div className="home-card-title-box">
            <h4 className="card-title">Apply To Study</h4>
          </div>
          <div className="home-card-pic-box">
            <img className="card-pic" src={card_pic_1} alt="card_pic_1" />
          </div>
        </div>
        <div className="home-card">
          <div className="home-card-title-box">
            <h4 className="card-title">Find A Job</h4>
          </div>
          <div className="home-card-pic-box">
            <img className="card-pic" src={card_pic_2} alt="card_pic_1" />
          </div>
        </div>
        <div className="home-card">
          <div className="home-card-title-box">
            <h4 className="card-title">Employer</h4>
          </div>
          <div className="home-card-pic-box">
            <img className="card-pic" src={card_pic_3} alt="card_pic_1" />
          </div>
        </div>
      </div>
    </div>
  );
}
