import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import Project from "./Project";
import Ceritification from "./Certification";
import Contact from "./Contact";
import Profile from "./Profile";
import AboutMe from "./AboutMe";
const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div>
      <div className="nav-container">
        <nav className="navigation">
          <div className="nav-name">
            <h2>VIMAL RAJ V</h2>
            <p>vimalrajviswanathan1150@gmail.com</p>
          </div>
          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            {!isNavExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <FaTimes size={20} style={{ color: "#fff" }} />
            )}
          </button>
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
            <ul>
              <li>
                <Link activeClass="active" smooth spy to="profile">
                  HOME
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="about">
                  ABOUT ME
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="certificate">
                  CERTIFICATIONS
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="handson">
                  HANDS-ON
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="contact">
                  CONTACT ME
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <section id="profile">
        <Profile />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="certificate">
        <Ceritification />
      </section>
      <section id="handson">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Navbar;
