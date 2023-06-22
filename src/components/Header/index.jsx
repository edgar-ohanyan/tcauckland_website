import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { Modal } from "@mui/material";

import logo from "../../assets/icons/thecollaborative-02.png";
import tca from "../../assets/icons/thecollaborative-03.png";
import "./header.css";
import MenuButton from "./MenuButton";

const navMenuItems = [
  {
    title: "Apply for Study",
    path: "/apply-for-study"
  },
  {
    title: "Study with us",
    path: "/study-with-us"
  },
  {
    title: "Visas & Permits",
    path: "/visas-and-permits"
  },
  {
    title: "English Programs",
    path: "/english-programs"
  },
  {
    title: "Foundation Programs",
    path: "/foundation-programs"
  },
  {
    title: "Tutoring",
    path: "/Tutoring"
  },
  {
    title: "Events and Functions",
    path: "/events-and-functions"
  },
]

function Header() {
  const [showBurger, setShowBurger] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);

  const handleCloseBurger = () => setOpenBurger(false);

  useState(() => {
    window.innerWidth <= 820 && setShowBurger(true);
  });

  return (
    <header className="header">
      <Link to="/">
        <div className="header-left">
          <div className="header-logo-box">
            <img className="header-logo" src={logo} alt="TCA icon" />
          </div>
          <div className="header-tca-box">
            <img className="header-tca" src={tca} alt="TCA icon" />
          </div>
        </div>
      </Link>
      <div className="header-right">
        {showBurger ? (
          <RxHamburgerMenu
            size={40}
            className="header-burger"
            onClick={() => setOpenBurger((o) => !o)}
          />
        ) : (
          <nav className="header-nav">
            <ul className="header-nav-list">
              <li className="header-nav-item">
                <a href="#">Submit CV</a>
              </li>
              <li className="header-nav-item">
                <MenuButton
                  id="students-button"
                  label="Students"
                  menuItems={navMenuItems}
                />
              </li>
              <li className="header-nav-item">
                <a href="#">Recruitment</a>
              </li>
              <li className="header-nav-item">
                <MenuButton
                  id="partnership-button"
                  label="Partnership"
                  menuItems={["Profile 2", "My account 2", "Logout 2"]}
                />
              </li>
            </ul>
          </nav>
        )}
      </div>

      {openBurger && (
        <div className="header-nav-popup">
          {/* Content of the popup */}
          <nav className="header-nav">
            <ul className="header-nav-list-popup">
              <li className="header-nav-item-popup">
                <a href="#">Submit CV</a>
              </li>
              <li className="header-nav-item-popup">
                <a href="#">Students</a>
              </li>
              <li className="header-nav-item-popup">
                <a href="#">Recruitment</a>
              </li>
              <li className="header-nav-item-popup">
                <a href="#">Partnership</a>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <Modal
        open={openBurger}
        onClose={handleCloseBurger}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="header-nav-popup">
          {/* Content of the popup */}
          <nav className="header-nav">
            <ul className="header-nav-list-popup">
              <li className="header-nav-item-popup">
                <a href="#">Submit CV</a>
              </li>
              <li className="header-nav-item-popup">
                <a href="#">Students</a>
              </li>
              <li className="header-nav-item-popup">
                <a href="#">Recruitment</a>
              </li>
              <li className="header-nav-item-popup">
                <a href="#">Partnership</a>
              </li>
            </ul>
          </nav>
        </div>
      </Modal>
    </header>
  );
}

export default Header;
