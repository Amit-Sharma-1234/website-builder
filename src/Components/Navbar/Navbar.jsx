import React from "react";
import "./Navbar.css";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="search-bar">
          {" "}
          <IoIosSearch className="search-icon" />
          <input type="text" className="search-input" />
        </div>
        <div className="nav-list-container">
          <ul className="nav-list">
            <li>Categories</li>
            <li>Website Builders</li>
            <li>Today's deals</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
