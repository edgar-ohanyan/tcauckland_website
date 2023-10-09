import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import careerHub from "../../assets/background/Home.jpg";
import worldAndPlane from "../../assets/card_size_pic/World&Plane.jpg";
import internationalTeach from "../../assets/card_size_pic/international teaching.jpg";
import whyAbroadBest from "../../assets/card_size_pic/whyTeachingAbroad.jpg";
import LDProfile from "../../assets/card_size_pic/how to linkedn.jpg";
import misconceptions from "../../assets/card_size_pic/studentsSeatOut.jpg";
import kuwait from "../../assets/card_size_pic/work Kuwait reasons.jpg";
import leader from "../../assets/card_size_pic/employer.jpeg";

import "./CareerHub.css";

export default function CareerHub() {
  return (
    <div>
      <div className="main-picture-box">
        <LazyLoadImage src={careerHub} className="main-picture" alt="home_bg" />
      </div>
      <div className="card-list">
        <Link
          to="/reasons-to-teach-internationally"
          className="careerArticleLink"
        >
          <div className="card">
            <div className="card-title-box">
              <h4 className="card-title">8 Reasons To Teach Internationally</h4>
            </div>
            <div className="card-description">
              <p className="card-description-text">
                Teach the world, live the dream!
              </p>
              <p className="card-description-text">
                That is the saying here at The Collobrative
              </p>
            </div>
            <div className="card-pic-box">
              <LazyLoadImage
                className="card-pic"
                src={worldAndPlane}
                alt="card_pic_1"
              />
            </div>
          </div>
        </Link>
        <Link to="/international-teaching" className="careerArticleLink">
          <div className="card">
            <div className="card-title-box">
              <h4 className="card-title">International teaching</h4>
            </div>
            <div className="card-description">
              <p className="card-description-text">
                Frequently asked questions
              </p>
              <p className="card-description-text">
                If you're deciding whether to take the plunge and teach abroad,
                you've probably got lots of questions
              </p>
            </div>
            <div className="card-pic-box">
              <LazyLoadImage
                className="card-pic"
                src={internationalTeach}
                alt="card_pic_1"
              />
            </div>
          </div>
        </Link>
        <Link to="/teaching-abroad" className="careerArticleLink">
          <div className="card">
            <div className="card-title-box">
              <h4 className="card-title">
                Why teaching abroad was the best decision of my life...
              </h4>
            </div>
            <div className="card-description">
              <p className="card-description-text">
                With a backpack and one very large suitcase in tow, I squeezed
                my mom and sister one last teary time and headed for the
                security line. Beijing, China.
              </p>
            </div>
            <div className="card-pic-box">
              <LazyLoadImage
                className="card-pic"
                src={whyAbroadBest}
                alt="card_pic_1"
              />
            </div>
          </div>
        </Link>
        <Link to="/linkedin-profile" className="careerArticleLink">
          <div className="card">
            <div className="card-title-box">
              <h4 className="card-title">
                How to create a great LinkedIn profile
              </h4>
            </div>
            <div className="card-description">
              <p className="card-description-text">
                With more than 740 million active users, LinkedIn has expanded
                from a networking site for professionals to one of the top
                social media platforms which is used to recruit, advertise
                market brands, post industry articles, or look for our dream
                jobs.
              </p>
            </div>
            <div className="card-pic-box">
              <LazyLoadImage
                className="card-pic"
                src={LDProfile}
                alt="card_pic_1"
              />
            </div>
          </div>
        </Link>
        <Link to="/misconceptions" className="careerArticleLink">
          <div className="card">
            <div className="card-title-box">
              <h4 className="card-title">
                Seven misconceptions about teaching abroad
              </h4>
            </div>
            <div className="card-description">
              <p className="card-description-text">
                So you are thinking about teaching abroad in international
                schools, and you have done some research. Think you know all
                about it?
              </p>
            </div>
            <div className="card-pic-box">
              <LazyLoadImage
                className="card-pic"
                src={misconceptions}
                alt="card_pic_1"
              />
            </div>
          </div>
        </Link>
        <Link to="/work-in-kuwait" className="careerArticleLink">
          <div className="card">
            <div className="card-title-box">
              <h4 className="card-title">Top 10 reasons to work in Kuwait.</h4>
            </div>
            <div className="card-description">
              <p className="card-description-text">
                Kuwait. A country bursting full of market bazaars, gleaming
                skyscrapers and glistening coastlines. It’s an oil-rich state
                that offers the opportunity for travellers and workers to wander
                around mosques
              </p>
            </div>
            <div className="card-pic-box">
              <LazyLoadImage
                className="card-pic"
                src={kuwait}
                alt="card_pic_1"
              />
            </div>
          </div>
        </Link>
        <Link to="/great-leader" className="careerArticleLink">
          <div className="card">
            <div className="card-title-box">
              <h4 className="card-title">How to be a great leader</h4>
            </div>
            <div className="card-description">
              <p className="card-description-text">
                As a teacher, each day you’ll be leading, inspiring and
                motivating your students. Whether through planning lessons or
                assemblies, encouraging your pupils
              </p>
            </div>
            <div className="card-pic-box">
              <LazyLoadImage
                className="card-pic"
                src={leader}
                alt="card_pic_1"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
