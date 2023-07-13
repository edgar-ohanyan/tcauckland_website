import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { Modal } from "@mui/material";

import logo from "../../assets/icons/thecollaborative-02.png";
import tca from "../../assets/icons/thecollaborative-03.png";
import styles from "./styles.module.css";
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
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.headerLeft}>
          <div className={styles.headerLogoBox}>
            <img className={styles.headerLogo} src={logo} alt="TCA icon" />
          </div>
          <div className={styles.headerTcaBox}>
            <img className={styles.headerTca} src={tca} alt="TCA icon" />
          </div>
        </div>
      </Link>
      <div className={styles.headerRight}>
        {showBurger ? (
          <RxHamburgerMenu
            size={40}
            className={styles.headerBurger}
            onClick={() => setOpenBurger((o) => !o)}
          />
        ) : (
          <nav>
            <ul className={styles.headerNavList}>
              <li className={styles.headerNavItem}>
                <a href="#">Submit CV</a>
              </li>
              <li className={styles.headerNavItem}>
                <MenuButton
                  id="students-button"
                  label="Students"
                  menuItems={navMenuItems}
                />
              </li>
              <li className={styles.headerNavItem}>
                <a href="#">Recruitment</a>
              </li>
              <li className={styles.headerNavItem}>
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
        <div className={styles.headerNavPopup}>
          {/* Content of the popup */}
          <nav>
            <ul className={styles.headerNavListPopup}>
              <li className={styles.headerNavItemPopup}>
                <a href="#">Submit CV</a>
              </li>
              <li className={styles.headerNavItemPopup}>
                <a href="#">Students</a>
              </li>
              <li className={styles.headerNavItemPopup}>
                <a href="#">Recruitment</a>
              </li>
              <li className={styles.headerNavItemPopup}>
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
        <div className={styles.headerNavPopup}>
          {/* Content of the popup */}
          <nav className="header-nav">
            <ul className={styles.headerNavListPopup}>
              <li className={styles.headerNavItemPopup}>
                <a href="#">Submit CV</a>
              </li>
              <li className={styles.headerNavItemPopup}>
                <a href="#">Students</a>
              </li>
              <li className={styles.headerNavItemPopup}>
                <a href="#">Recruitment</a>
              </li>
              <li className={styles.headerNavItemPopup}>
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
