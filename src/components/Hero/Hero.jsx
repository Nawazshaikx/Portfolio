import React from "react";
import "./Hero.css";
import htmllogo from "../../assets/Images/HTML5.png";
import profile from "../../assets/Images/Profile.jpeg";
import Tailwindlogo from "../../assets/Images/Tailwind.png";
import csslogo from "../../assets/Images/Css.svg";
import reactlogo from "../../assets/Images/React-icon.png";
import javascriptlogo from "../../assets/Images/javascript-logo.webp";
function Hero() {
  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <h2>Transforming Code into Creativity</h2>
          <p>
            Passionate FrontEnd Developer | Transforming Ideas into Seamless and
            Visually Stunning Web Solutions
          </p>
        </div>
        <div className="hero-img">
          <div>
            <div className="tech-icon">
              <img src={htmllogo} alt="" width={"20px"} />
            </div>

            <img
              src={profile}
              alt=""
              width={"400px"}
              className="profile-main"
            />
          </div>
          <div>
            <div className="tech-icon">
              <img src={csslogo} alt="" width={"20px"} />
            </div>
            <div className="tech-icon">
              <img src={javascriptlogo} alt="" width={"20px"} />
            </div>
            <div className="tech-icon">
              <img src={reactlogo} alt="" width={"20px"} />
            </div>
            {/* --- */}
            <div className="tech-icon">
              <img src={Tailwindlogo} alt="" width={"20px"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
