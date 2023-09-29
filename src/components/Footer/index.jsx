import React from "react";
import "./footer.css";
import { SiGooglemaps } from "react-icons/si";
import { ImPhone } from "react-icons/im";
import { TbMailForward } from "react-icons/tb";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { RiTwitterFill } from "react-icons/ri";

import tca_logo from "../../assets/icons/thecollaborative-01.svg";

export default function Footer() {
  return (
    <div className="footer bg-dark p-5">
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-item footer-logo-box">
          <img className="footer-logo" src={tca_logo} alt="tca_logo" />
        </div>
        {/* About */}
        <div className="footer-item p-3">
          <p className="descriptionTitle">
            Elevate Your Educational Journey with Us!
          </p>
          <p>
            Welcome to The Collaborative Auckland recruitment platform, where
            opportunities meet talent. We connect educators and institutions,
            fostering a brighter future for learners everywhere. Join us in
            shaping the next generation of leaders, thinkers, and innovators.
            Explore, connect, and excel with our educational recruitment
            services today.
          </p>
        </div>
        {/* Contact */}
        <div className="footer-item p-3">
          <div className="d-flex">
            <span className="icon-box">
              <SiGooglemaps size={25} style={{ color: "#67bde4" }} />
            </span>
            <p className="text-left">
              15 Auburn St. Takapuna Auckland, New Zealand.
            </p>
          </div>
          <a className="phone-email" href="tel:+64 210 819 8638">
            <div className="d-flex">
              <span className="icon-box">
                <ImPhone size={25} style={{ color: "inherit" }} />
              </span>
              <p>(+64) 210 819 8638</p>
            </div>
          </a>
          <a
            className="phone-email"
            href="mailto: thecollaborativeauckland@gmail.com"
          >
            <div className="d-flex">
              <span className="icon-box">
                <TbMailForward size={28} style={{ color: "inherit" }} />
              </span>
              <p className="footer-email">thecollaborativeauckland@gmail.com</p>
            </div>
          </a>

          <div className="d-flex">
            <a
              href="https://twitter.com/TCA_Auckland"
              className="social-button"
            >
              <RiTwitterFill size={30} style={{ color: "#67bde4" }} />
            </a>
            <a href="https://facebook.com" className="social-button">
              <BsFacebook size={30} style={{ color: "#67bde4" }} />
            </a>
            <a href="https://instagram.com" className="social-button">
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
