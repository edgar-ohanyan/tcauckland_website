import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import applyToStud from "../../assets/background/Apply to study.jpg";
import studyWithUs from "../../assets/card_size_pic/studyWithUs.jpg";
import WorldAndPlane from "../../assets/card_size_pic/World&Plane.jpg";
import englishProgrum from "../../assets/card_size_pic/englishProgrum.jpg";
import studentsSeatOut from "../../assets/card_size_pic/studentsSeatOut.jpg";
import whyTeachingAbroad from "../../assets/card_size_pic/whyTeachingAbroad.jpg";

import "./applyForStudy.css";

export default function ApplyForStudy() {
  return (
    <div>
      <div className="main-picture-box">
        <LazyLoadImage
          src={applyToStud}
          className="main-picture"
          alt="home_bg"
        />
      </div>
      <div className="card-list">
        <Link to="/study-with-us" className="card-nav-link">
          <div className="card">
            <div className="card-title-box">
              <h4 className="card-title">Study With Us</h4>
            </div>
            <div className="card-description">
              <p className="card-description-text">
                New Zealand is home to eight universities of the highest
                quality. All are ranked in the top 3% (500) universities in the
                world.
              </p>
            </div>
            <div className="card-pic-box">
              <LazyLoadImage
                className="card-pic"
                src={studyWithUs}
                alt="card_pic_1"
              />
            </div>
          </div>
        </Link>
        <Link to="/visas-and-permits" className="card-nav-link">
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
              <LazyLoadImage
                className="card-pic"
                src={WorldAndPlane}
                alt="card_pic_1"
              />
            </div>
          </div>
        </Link>
        <Link to="/english-programs" className="card-nav-link">
          <div className="card">
            <div className="card-title-box">
              <h4 className="card-title">English Programs</h4>
            </div>
            <div className="card-description">
              <p className="card-description-text">
                If you want to improve your English to help you communicate,
                work or travel, this course is for you. It covers reading,
                writing, listening and speaking at all levels, from beginner to
                advanced.
              </p>
            </div>
            <div className="card-pic-box">
              <LazyLoadImage
                className="card-pic"
                src={englishProgrum}
                alt="card_pic_1"
              />
            </div>
          </div>
        </Link>
        <Link to="/foundation-programs" className="card-nav-link">
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
              <LazyLoadImage
                className="card-pic"
                src={studentsSeatOut}
                alt="card_pic_1"
              />
            </div>
          </div>
        </Link>
        <Link to="/tutoring" className="card-nav-link">
          <div className="card">
            <div className="card-title-box">
              <h4 className="card-title">Tutoring</h4>
            </div>
            <div className="card-description">
              <p className="card-description-text">
                We want to make sure we offer the best services to all our
                students. our mission is to make sure students achieve their
                goals in studying in New Zealand. we believe with the right
                people support all our students are capable of achieving
                anything. Tell us with what subject do you need help, and we can
                arrange a tutor to help you achieve it.
              </p>
            </div>
            <div className="card-pic-box">
              <LazyLoadImage
                className="card-pic"
                src={whyTeachingAbroad}
                alt="card_pic_1"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
