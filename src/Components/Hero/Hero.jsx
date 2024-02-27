import React from "react";
import "./Hero.css";
import first_img from "../../assets/first_img.png";
import second_img from "../../assets/second_img.png";
import third_img from "../../assets/third_img.png";
import vector_img from "../../assets/vector_img.png";
import trophy_img from "../../assets/trophy_img.png";
import diamond_img from "../../assets/diamond_img.png";
import HeroCard from "../HeroCard/HeroCard";
import star_img1 from "../../assets/star_img1.png";
import star_img2 from "../../assets/star_img2.png";
import star_img3 from "../../assets/star_img3.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <h1>Best Website builders in the US</h1>

        <hr />
        <div className="info-container">
          <div className="left-info">
            <img src={first_img} alt="" />
            <p>Last Updated - February 22, 2020</p>
            <img src={second_img} alt="" />
            <p>Advertising Disclosure</p>
          </div>
          <div className="right-info">
            <p>Top Relevant</p>
            <img src={third_img} alt="" />
          </div>
        </div>

        <hr />
        <ul className="first-hero-list">
          <li>Tools</li>
          <li>AWS Builder</li>
          <li>Start Build</li>
          <li>Tooling</li>
          <li>BlueHosting</li>
        </ul>
        <ul className="second-hero-list">
          <li>Home</li>
          <img src={vector_img} alt="" />
          <li>Hosting for all</li>
          <img src={vector_img} alt="" />
          <li>Hosting</li>
          <img src={vector_img} alt="" />
          <li>Hosting6</li>
          <img src={vector_img} alt="" />
          <li>Hosting5</li>
        </ul>

        <HeroCard
          tagcontent="Best Choice"
          tagimage={trophy_img}
          decrate={9.8}
          h1content={"WixPro 72-Inch Responsive Website Builder"}
          spancontent={
            "- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
          }
          mainhighlight="Main highlights"
          pcontent=" [What You Get]: Receive the WixPro website builder suite, access
        to premium design templates, an extensive library of widgets and
        apps, and detailed step-by-step guides."
          word={"Exceptional"}
          starimg={star_img1}
        />
        <HeroCard
          tagcontent="Best Value"
          tagimage={diamond_img}
          decrate={9.5}
          h1content={"SiteCraft 68-Inch Ultimate Web Design Studio"}
          spancontent={
            "- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"
          }
          mainhighlight="Main highlights"
          pcontent="[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
          word={"Excellent"}
          starimg={star_img2}
        />
        <HeroCard
          decrate={9.3}
          h1content="WixPro 72-Inch Responsive Website Builder"
          spancontent="- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
          mainhighlight="Main highlights"
          pcontent="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
          word={"Exceptional"}
          starimg={star_img1}
        />
        <HeroCard
          decrate={9.1}
          h1content="WixPro 72-Inch Responsive Website Builder"
          spancontent="- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
          mainhighlight="Main highlights"
          pcontent="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
          word={"Very Good"}
          starimg={star_img3}
        />
        <h1 className="heading">Related deals you might like for</h1>
      </div>
    </>
  );
};

export default Hero;
