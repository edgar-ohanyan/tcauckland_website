import React, { useEffect, useState, useRef } from "react";
import "./header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import Modal from "@mui/material/Modal";

import logo from "../../assets/icons/thecollaborative-02.png";
import tca from "../../assets/icons/thecollaborative-03.png";

function Header() {
  const [showBurger, setShowBurger] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const handleClose = () => setOpen(false);

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
          <RxHamburgerMenu
            size={40}
            className="header-burger"
            onClick={() => setOpen((o) => !o)}
          />
        ) : (
          <nav className="header-nav">
            <ul className="header-nav-list">
              <li className="header-nav-item">
                <a href="#">Submit CV</a>
              </li>
              <li className="header-nav-item">
                <a href="#">Students</a>
              </li>
              <li className="header-nav-item">
                <a href="#">Recruitment</a>
              </li>
              <li className="header-nav-item">
                <a href="#">Partnership</a>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {open && (
        <div className="header-nav-popup" ref={ref}>
          {/* Content of the popup */}
        </div>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="header-nav-popup" ref={ref}>
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
