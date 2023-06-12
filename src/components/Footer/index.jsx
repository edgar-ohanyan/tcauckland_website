import React from "react";
import "./footer.css";
import { SiGooglemaps } from "react-icons/si";
import { ImPhone } from "react-icons/im";
import { TbMailForward } from "react-icons/tb";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

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
        <div className="footer-item p-3">
          <div className="d-flex">
            <span className="icon-box">
              <SiGooglemaps size={25} style={{ color: "#67bde4" }} />
            </span>
            <p className="text-left">
              203 Fake St. Mountain View, San Francisco, California, USA
            </p>
          </div>
          <a className="phone-email" href="tel:+64 210 881 9197">
            <div className="d-flex">
              <span className="icon-box">
                <ImPhone size={25} style={{ color: "inherit" }} />
              </span>
              <p>+64 210 881 9197</p>
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
              <p>thecollaborativeaucklandco@gmail.com</p>
            </div>
          </a>

          <div className="d-flex">
            <a href="https://twitter.com" className="social-button">
              <BsTwitter size={30} style={{ color: "#67bde4" }} />
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
