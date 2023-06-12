import React, { useEffect, useState } from "react";
import "./header.css";
import { RxHamburgerMenu } from "react-icons/rx";

import logo from "../../assets/icons/thecollaborative-02.png";
import tca from "../../assets/icons/thecollaborative-03.png";



function Header() {
  const [showBurger, setShowBurger] = useState(false);
  useEffect(() => {
    window.innerWidth <= 820 && setShowBurger(true);
  });

  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo-box">
          <img className="header-logo" src={logo} alt="TCA icon" />
        </div>
        <div className="header-tca-box">
          <img className="header-tca" src={tca} alt="TCA icon" />
        </div>
      </div>
      <div className="header-right">
        {showBurger ? (
          <>
          <RxHamburgerMenu size={40} className="header-burger" />
          </>
        ) : (
          <>
            <nav className="header-nav">
              <ul className="header-nav-list">
                <li className="header-nav-item">
                  <a href="#">Submit CV</a>
                </li>
                <li className="header-nav-item">
                  <a href="#">Students</a>
                </li>
                <li className="header-nav-item">
                  <a href="#">Recruiment</a>
                </li>
                <li className="header-nav-item">
                  <a href="#">Partnership</a>
                </li>
              </ul>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
