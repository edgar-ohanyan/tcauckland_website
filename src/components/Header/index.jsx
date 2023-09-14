import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { Modal } from "@mui/material";

import logo from "../../assets/icons/thecollaborative-02.png";
import tca from "../../assets/icons/thecollaborative-03.png";
import "./header.css";
import MenuButton from "./MenuButton";

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
                <Link to="/submit-cv" className="card-nav-link">
                  Submit CV
                </Link>
              </li>
              <li className="header-nav-item">
                <Link to="/apply-for-study" className="card-nav-link">
                  Students
                </Link>
              </li>
              <li className="header-nav-item">
                <MenuButton
                  id="recruitment-button"
                  label="Recruitment"
                  menuItems={[
                    {
                      title: "Find A Job",
                      path: "/find-a-job",
                    },
                    {
                      title: "Career Hub",
                      path: "/career-hub",
                    },
                    {
                      title: "Candidate Journey",
                      path: "/candiate-journey",
                    },
                  ]}
                />
              </li>
              <li className="header-nav-item">
                <MenuButton
                  id="recruitment-button"
                  label="Partnership"
                  menuItems={[
                    {
                      title: "Leadership Positions",
                      path: "/leader-postion",
                    },
                    {
                      title: "Submit A Vacancy",
                      path: "/submit-vacancy",
                    },
                    {
                      title: "Virtual interviews",
                      path: "/virtual-interviews",
                    },
                    {
                      title: "How To Become A Partner",
                      path: "/become-partner",
                    },
                  ]}
                />
              </li>
              <li className="header-nav-item">
                <a href="/contact-us">Contact Us</a>
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
                <Link to="/submit-cv" className="card-nav-link">
                  Submit CV
                </Link>
              </li>
              <li className="header-nav-item-popup">
                <Link to="/apply-for-study" className="card-nav-link">
                  Students
                </Link>
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
