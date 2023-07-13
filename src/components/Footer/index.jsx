import React from "react";
import styles from "./styles.module.css";
import { SiGooglemaps } from "react-icons/si";
import { ImPhone } from "react-icons/im";
import { TbMailForward } from "react-icons/tb";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

import tca_logo from "../../assets/icons/thecollaborative-01.svg";

export default function Footer() {
  return (
    <div className={`${styles.footer} bg-dark p-5`}>
      <div className={styles.footerContent}>
        {/* Logo */}
        <div className={`${styles.footerItem} ${styles.footerLogoBox}`}>
          <img className={styles.footerLogo} src={tca_logo} alt="tca_logo" />
        </div>
        {/* About */}
        <div className={`${styles.footerItem} p-3`}>
          <p>
            The collaborative aims to help international students study at top
            New Zealand Universities, as well as placing qualified teachers in
            teaching posts in New Zealand and abroad. The collaborative aims to
            help international students study at top New Zealand Universities,
            as well as placing qualified teachers in teaching posts in New
            Zealand and abroad.
          </p>
        </div>
        {/* Contact */}
        <div className={`${styles.footerItem} p-3`}>
          <div className="d-flex">
            <span className={styles.iconBox}>
              <SiGooglemaps size={25} style={{ color: "#67bde4" }} />
            </span>
            <p className={styles.textLeft}>
              203 Fake St. Mountain View, San Francisco, California, USA
            </p>
          </div>
          <a className={styles.phoneEmail} href="tel:+64 210 881 9197">
            <div className="d-flex">
              <span className={styles.iconBox}>
                <ImPhone size={25} style={{ color: "inherit" }} />
              </span>
              <p>+64 210 881 9197</p>
            </div>
          </a>
          <a
            className={styles.phoneEmail}
            href="mailto: thecollaborativeauckland@gmail.com"
          >
            <div className="d-flex">
              <span className={styles.iconBox}>
                <TbMailForward size={28} style={{ color: "inherit" }} />
              </span>
              <p className={styles.footerEmail}>thecollaborativeaucklandco@gmail.com</p>
            </div>
          </a>

          <div className="d-flex">
            <a href="https://twitter.com" className={styles.socialButton}>
              <BsTwitter size={30} style={{ color: "#67bde4" }} />
            </a>
            <a href="https://facebook.com" className={styles.socialButton}>
              <BsFacebook size={30} style={{ color: "#67bde4" }} />
            </a>
            <a href="https://instagram.com" className={styles.socialButton}>
              <BsInstagram size={30} style={{ color: "#67bde4" }} />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <h5 className="text-secondary">
          Copyright © All rights reserved | The Collaborative
        </h5>
      </div>
    </div>
  );
}
