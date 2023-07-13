import React from "react";
import { Link } from "react-router-dom";

import home_bg from "../../assets/pictures/bg_home.jpg";
import card_pic_1 from "../../assets/pictures/image_1.jpg";
import card_pic_2 from "../../assets/pictures/image_2.jpg";
import card_pic_3 from "../../assets/pictures/image_3.jpg";

import styles from "./styles.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.mainPictureBox}>
        <img src={home_bg} className={styles.mainPicture} alt="home_bg" />
      </div>
      <div className={styles.homeContent}>
        <Link to="/apply-for-study" className="card-nav-link">
          <div className={styles.homeCard}>
            <div className={styles.homeCardTitleBox}>
              <h4 className={styles.cardTitle}>Apply To Study</h4>
            </div>
            <div className={styles.homeCardPicBox}>
              <img className={styles.cardPic} src={card_pic_1} alt="card_pic_1" />
            </div>
          </div>
        </Link>
        <Link to="/apply-for-study" className="card-nav-link">
          <div className={styles.homeCard}>
            <div className={styles.homeCardTitleBox}>
              <h4 className={styles.cardTitle}>Find A Job</h4>
            </div>
            <div className={styles.homeCardPicBox}>
              <img className={styles.cardPic} src={card_pic_2} alt="card_pic_1" />
            </div>
          </div>
        </Link>

        <Link to="/apply-for-study" className="card-nav-link">
          <div className={styles.homeCard}>
            <div className={styles.homeCardTitleBox}>
              <h4 className={styles.cardTitle}>Employer</h4>
            </div>
            <div className={styles.homeCardPicBox}>
              <img className={styles.cardPic} src={card_pic_3} alt="card_pic_1" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
