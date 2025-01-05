import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import logo from "../../assets/icons/thecollaborative-02.png";
import tca from "../../assets/icons/thecollaborative-03.png";
import "./header.css";

function Header() {
  const [showBurger, setShowBurger] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation(); // Get the current route

  useEffect(() => {
    const updateBurgerVisibility = () => {
      setShowBurger(window.innerWidth <= 820);
    };
    updateBurgerVisibility();
    window.addEventListener("resize", updateBurgerVisibility);
    return () => window.removeEventListener("resize", updateBurgerVisibility);
  }, []);

  const isActive = (path, submenuPaths = []) => {
    return (
      location.pathname === path || submenuPaths.includes(location.pathname)
    );
  };

  return (
    <header className="header">
      {/* Logo Section */}
      <Link to="/" onClick={() => setOpenMenu(false)}>
        <div className="header-left">
          <img className="header-logo" src={logo} alt="TCA icon" />
          <img className="header-tca" src={tca} alt="TCA icon" />
        </div>
      </Link>

      {/* Navigation */}
      <div className="header-right">
        {showBurger ? (
          <RxHamburgerMenu
            size={40}
            className="header-burger"
            onClick={() => setOpenMenu(true)}
          />
        ) : (
          <nav className="header-nav">
            <ul className="header-nav-list">
              {/* services dropdown */}
              <li
                className={`header-nav-item header-dropdown ${isActive("/services", [
                  "/new-schools-and-school-acquisitions",
                  "/leadership-training",
                  "/school-improvement-evaluation",
                  "/assessment-and-feedback",
                  "/workplace-training",
                ])
                    ? "active"
                    : ""
                  }`}
              >
                <span>Services</span>
                <ul className="header-dropdown-menu">
                  <li className={`${isActive("/new-schools-and-school-acquisitions") ? "active" : ""}`}>
                    <Link to="/new-schools-and-school-acquisitions">New Schools & School Acquisitions</Link>
                  </li>
                  <li className={`${isActive("/leadership-training") ? "active" : ""}`}>
                    <Link to="/leadership-training">Leadership Training</Link>
                  </li>
                  <li className={`${isActive("/school-improvement-evaluation") ? "active" : ""}`}>
                    <Link to="/school-improvement-evaluation">School Improvement Evaluation</Link>
                  </li>

                  <li className={`${isActive("/workplace-training") ? "active" : ""}`}>
                    <Link to="/workplace-training">Workplace Training</Link>
                  </li>
                </ul>
              </li>

              <li className={`header-nav-item ${isActive("/about-us") ? "active" : ""}`}>
                <Link to="/about-us">About Us</Link>
              </li>
              <li className={`header-nav-item ${isActive("/submit-cv") ? "active" : ""}`}>
                <Link to="/submit-cv">Submit CV</Link>
              </li>
              <li className={`header-nav-item ${isActive("/apply-for-study") ? "active" : ""}`}>
                <Link to="/apply-for-study">Students</Link>
              </li>
              {/* Recruitment Dropdown */}
              <li
                className={`header-nav-item header-dropdown ${isActive("/recruitment", ["/find-a-job", "/career-hub", "/candidate-journey"])
                    ? "active"
                    : ""
                  }`}
              >
                <span>Recruitment</span>
                <ul className="header-dropdown-menu">
                  <li className={`${isActive("/find-a-job") ? "active" : ""}`}>
                    <Link to="/find-a-job">Job Board</Link>
                  </li>
                  <li className={`${isActive("/career-hub") ? "active" : ""}`}>
                    <Link to="/career-hub">Career Hub</Link>
                  </li>
                  <li className={`${isActive("/candidate-journey") ? "active" : ""}`}>
                    <Link to="/candidate-journey">Candidate Journey</Link>
                  </li>
                </ul>
              </li>
              {/* Partnership Dropdown */}
              <li
                className={`header-nav-item header-dropdown ${isActive("/partnership", [
                  "/leader-position",
                  "/submit-vacancy",
                  "/virtual-interviews",
                  "/become-partner",
                ])
                    ? "active"
                    : ""
                  }`}
              >
                <span>Corporate</span>
                <ul className="header-dropdown-menu">
                  <li className={`${isActive("/leader-position") ? "active" : ""}`}>
                    <Link to="/leader-position">Leadership Positions</Link>
                  </li>
                  <li className={`${isActive("/submit-vacancy") ? "active" : ""}`}>
                    <Link to="/submit-vacancy">Submit A Vacancy</Link>
                  </li>
                  <li className={`${isActive("/virtual-interviews") ? "active" : ""}`}>
                    <Link to="/virtual-interviews">Virtual Interviews</Link>
                  </li>
                  <li className={`${isActive("/become-partner") ? "active" : ""}`}>
                    <Link to="/become-partner">Corporate Leadership Training</Link>
                  </li>
                </ul>
              </li>
              <li className={`header-nav-item ${isActive("/contact-us") ? "active" : ""}`}>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {/* Mobile Menu */}
      {showBurger && openMenu && (
        <div className="mobile-menu">
          <MdClose
            size={30}
            className="mobile-menu-close"
            onClick={() => setOpenMenu(false)}
          />
          <nav>
            <ul className="mobile-menu-list">
              <li>
                <Link to="/" onClick={() => setOpenMenu(false)}>
                  Home
                </Link>
              </li>

              <li>
                <Link to="/Services" onClick={() => setOpenMenu(false)}>
                  Services
                </Link>


              </li>

              <li>
                <Link to="/about-us" onClick={() => setOpenMenu(false)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/submit-cv" onClick={() => setOpenMenu(false)}>
                  Submit CV
                </Link>
              </li>
              <li>
                <Link to="/apply-for-study" onClick={() => setOpenMenu(false)}>
                  Students
                </Link>
              </li>
              <li>
                <span>Recruitment</span>
                <ul>
                  <li>
                    <Link to="/find-a-job" onClick={() => setOpenMenu(false)}>
                      Job Board
                    </Link>
                  </li>
                  <li>
                    <Link to="/career-hub" onClick={() => setOpenMenu(false)}>
                      Career Hub
                    </Link>
                  </li>
                  <li>
                    <Link to="/candidate-journey" onClick={() => setOpenMenu(false)}>
                      Candidate Journey
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <span>Corporate</span>
                <ul>
                  <li>
                    <Link to="/leader-position" onClick={() => setOpenMenu(false)}>
                      Leadership Positions
                    </Link>
                  </li>
                  <li>
                    <Link to="/submit-vacancy" onClick={() => setOpenMenu(false)}>
                      Submit A Vacancy
                    </Link>
                  </li>
                  <li>
                    <Link to="/virtual-interviews" onClick={() => setOpenMenu(false)}>
                      Virtual Interviews
                    </Link>
                  </li>
                  <li>
                    <Link to="/become-partner" onClick={() => setOpenMenu(false)}>
                      How To Become A Partner
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact-us" onClick={() => setOpenMenu(false)}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
