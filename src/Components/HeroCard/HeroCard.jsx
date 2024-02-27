import React from "react";
import "./HeroCard.css";

import down_icon from "../../assets/down_icon.png";
import computer_img from "../../assets/computer_img.png";
import star1_img from "../../assets/star1_img.png";

const HeroCard = ({
  tagcontent,
  tagimage,
  decrate,
  h1content,
  spancontent,
  mainhighlight,
  pcontent,
  word,
  starimg,
}) => {
  // console.log(decrate);
  return (
    <div className="card-container">
      {decrate >= 9.5 ? (
        <div className="best-tag">
          <p>
            <img src={tagimage} className="trophy-img" /> {tagcontent}{" "}
          </p>
        </div>
      ) : (
        ""
      )}
      <main>
        <div className="main-section">
          <div className="builder1">
            {" "}
            <img src={computer_img} className="comp-img" alt="" />
            <p>Builder 1</p>
          </div>
          <div className="description">
            <h2>
              {h1content}
              <span>{spancontent}</span>{" "}
            </h2>
            <div className="highlight">
              <h3>{mainhighlight}</h3>
              <p>{pcontent}</p>
            </div>
          </div>
          <div className="rating">
            <h2> {decrate} </h2>
            <p> {word} </p>
            <img src={starimg} className="star-img" alt="" />
          </div>
        </div>{" "}
        <div className="last">
          <div className="show">
            <a href="">Show more </a>
            <img src={down_icon} className="down-icon" alt="" />
          </div>
          <button>View</button>
        </div>
      </main>
    </div>
  );
};

export default HeroCard;
