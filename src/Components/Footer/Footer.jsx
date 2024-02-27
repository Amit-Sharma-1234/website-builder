import React from "react";
import "./Footer.css";
import { FaAngleDown } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="left-container">
          <p>Catergories</p>
          <ul className="footer-list">
            <li>Web Builder</li>
            <li>Hosting</li>
            <li>Data Center</li>
            <li>Robotic-Automation</li>
          </ul>
        </div>
        <div className="middle-container">
          <p>Contact</p>
          <ul className="footer-list">
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Services</li>
            <li>Categories</li>
            <li>About</li>
          </ul>
        </div>
        <div className="right-container">
          <p>United States</p>
          <FaAngleDown className="faangle-down" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
