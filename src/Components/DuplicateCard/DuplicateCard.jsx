import React from "react";
import "./DuplicateCard.css";
import computer_img from "../../assets/computer_img.png";
const DuplicateCard = () => {
  return (
    <div className="duplicate-card">
      <div className="main-card">
        <img src={computer_img} className="comp-img" alt="" />
        <p className="combo">
          {" "}
          <span className="off">20% Off</span>{" "}
          <span className="limited-time">Limited time </span>{" "}
        </p>
        <h3 className="webbuilder">Webbuilder 1</h3>
        <p className="modern-computer">
          Computer Modern clasic with wix support
        </p>
        <p className="price-container">
          {" "}
          <span className="new-price">$39.96</span>{" "}
          <span className="old-price">$49.96</span>{" "}
          <span className="red-off">(20% Off)</span>
        </p>
        <button className="view-btn">View Deal</button>
      </div>
    </div>
  );
};

export default DuplicateCard;
