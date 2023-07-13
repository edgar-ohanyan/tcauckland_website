import React from "react";
import { Link } from "react-router-dom";

import applyToStudy from "../../assets/pictures/bg_apply2study.jpeg";
import studyWithUS_pic from "../../assets/pictures/studyWithUs.jpg";
import visasAndPermit_pic from "../../assets/pictures/visa&permit.jpeg";
import englishProgrum from "../../assets/pictures/englishProgrum.jpg";
import foundation from "../../assets/pictures/foundationPage.jpeg";
import tutoring from "../../assets/pictures/tutoring.jpeg";

import styles from "./styles.module.css";

export default function ApplyForStudy() {
  return (
    <div>
      <div className={styles.mainPictureBox}>
        <img src={applyToStudy} className={styles.mainPicture} alt="home_bg" />
      </div>
      <div className={styles.cardList}>
        <Link to="/study-with-us" className={styles.cardNavLink}>
          <div className={styles.card}>
            <div className={styles.cardTitleBox}>
              <h4 className={styles.cardTitle}>Study With Us</h4>
            </div>
            <div className={styles.cardDescription}>
              <p className={styles.cardDescriptionText}>
                New Zealand is home to eight universities of the highest
                quality. All are ranked in the top 3% (500) universities in the
                world.
              </p>
            </div>
            <div className={styles.cardPicBox}>
              <img
                className={styles.cardPic}
                src={studyWithUS_pic}
                alt="card_pic_1"
              />
            </div>
          </div>
        </Link>
        <Link to="/visas-and-permits" className={styles.cardNavLink}>
          <div className={styles.card}>
            <div className={styles.cardTitleBox}>
              <h4 className={styles.cardTitle}>Visas & Permits</h4>
            </div>
            <div className={styles.cardDescription}>
              <p className={styles.cardDescriptionText}>
                If you are an international student you are required by law to
                hold a valid visa for the duration of your study in New Zealand
                Universities. This page describes the applying process and the
                documents you will need to supply with your visa application.
              </p>
            </div>
            <div className={styles.cardPicBox}>
              <img
                className={styles.cardPic}
                src={visasAndPermit_pic}
                alt="card_pic_1"
              />
            </div>
          </div>
        </Link>
        <Link to="/english-programs" className={styles.cardNavLink}>
        <div className={styles.card}>
          <div className={styles.cardTitleBox}>
            <h4 className={styles.cardTitle}>English Programs</h4>
          </div>
          <div className={styles.cardDescription}>
            <p className={styles.cardDescriptionText}>
              If you want to improve your English to help you communicate, work
              or travel, this course is for you. It covers reading, writing,
              listening and speaking at all levels, from beginner to advanced.
            </p>
          </div>
          <div className={styles.cardPicBox}>
            <img className={styles.cardPic} src={englishProgrum} alt="card_pic_1" />
          </div>
        </div>
        </Link>
        <Link to="/foundation-programs" className={styles.cardNavLink}>
        <div className={styles.card}>
          <div className={styles.cardTitleBox}>
            <h4 className={styles.cardTitle}>Foundation Programs</h4>
          </div>
          <div className={styles.cardDescription}>
            <p className={styles.cardDescriptionText}>
              What is a foundation course? A foundation course is a programme
              that will prepare you for an undergraduate degree at New Zealand
              universities. They are specifically designed for international
              students who want to study abroad.
            </p>
          </div>
          <div className={styles.cardPicBox}>
            <img className={styles.cardPic} src={foundation} alt="card_pic_1" />
          </div>
        </div>
        </Link>
        <Link to="/tutoring" className={styles.cardNavLink}>
        <div className={styles.card}>
          <div className={styles.cardTitleBox}>
            <h4 className={styles.cardTitle}>Tutoring</h4>
          </div>
          <div className={styles.cardDescription}>
            <p className={styles.cardDescriptionText}>
              We want to make sure we offer the best services to all our
              students. our mission is to make sure students achieve their goals
              in studying in New Zealand. we believe with the right people
              support all our students are capable of achieving anything. Tell
              us with what subject do you need help, and we can arrange a tutor
              to help you achieve it.
            </p>
          </div>
          <div className={styles.cardPicBox}>
            <img className={styles.cardPic} src={tutoring} alt="card_pic_1" />
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}
