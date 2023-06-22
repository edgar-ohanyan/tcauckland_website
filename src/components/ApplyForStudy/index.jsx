import React from "react";

import applyToStudy from "../../assets/pictures/bg_apply2study.jpeg";
import studyWithUS_pic from "../../assets/pictures/studyWithUs.jpg";
import visasAndPermit_pic from "../../assets/pictures/visa&permit.jpeg";
import englishProgrum from "../../assets/pictures/englishProgrum.jpg";
import foundation from "../../assets/pictures/foundationPage.jpeg";
import tutoring from "../../assets/pictures/tutoring.jpeg";


import "./applyForStudy.css";

export default function ApplyForStudy() {
  return (
    <div>
      <div className="main-picture-box">
        <img src={applyToStudy} className="main-picture" alt="home_bg" />
      </div>
      <div className="card-list">
        <div className="card">
          <div className="card-title-box">
            <h4 className="card-title">Study With Us</h4>
          </div>
          <div className="card-description">
            <p className="card-description-text">
              New Zealand is home to eight universities of the highest quality.
              All are ranked in the top 3% (500) universities in the world.
            </p>
          </div>
          <div className="card-pic-box">
            <img className="card-pic" src={studyWithUS_pic} alt="card_pic_1" />
          </div>
        </div>
        <div className="card">
          <div className="card-title-box">
            <h4 className="card-title">Visas & Permits</h4>
          </div>
          <div className="card-description">
            <p className="card-description-text">
              If you are an international student you are required by law to
              hold a valid visa for the duration of your study in New Zealand
              Universities. This page describes the applying process and the
              documents you will need to supply with your visa application.
            </p>
          </div>
          <div className="card-pic-box">
            <img className="card-pic" src={visasAndPermit_pic} alt="card_pic_1" />
          </div>
        </div>
        <div className="card">
          <div className="card-title-box">
            <h4 className="card-title">English Programs</h4>
          </div>
          <div className="card-description">
            <p className="card-description-text">
              If you want to improve your English to help you communicate, work
              or travel, this course is for you. It covers reading, writing,
              listening and speaking at all levels, from beginner to advanced.
            </p>
          </div>
          <div className="card-pic-box">
            <img className="card-pic" src={englishProgrum} alt="card_pic_1" />
          </div>
        </div>
        <div className="card">
          <div className="card-title-box">
            <h4 className="card-title">Foundation Programs</h4>
          </div>
          <div className="card-description">
            <p className="card-description-text">
              What is a foundation course? A foundation course is a programme
              that will prepare you for an undergraduate degree at New Zealand
              universities. They are specifically designed for international
              students who want to study abroad.
            </p>
          </div>
          <div className="card-pic-box">
            <img className="card-pic" src={foundation} alt="card_pic_1" />
          </div>
        </div>
        <div className="card">
          <div className="card-title-box">
            <h4 className="card-title">Tutoring</h4>
          </div>
          <div className="card-description">
            <p className="card-description-text">
              We want to make sure we offer the best services to all our
              students. our mission is to make sure students achieve their goals
              in studying in New Zealand. we believe with the right people
              support all our students are capable of achieving anything. Tell
              us with what subject do you need help, and we can arrange a tutor
              to help you achieve it.
            </p>
          </div>
          <div className="card-pic-box">
            <img className="card-pic" src={tutoring} alt="card_pic_1" />
          </div>
        </div>
      </div>
    </div>
  );
}