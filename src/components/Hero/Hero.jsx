import React from "react";
import "./Hero.css";
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
              <img src="src\assets\Images\HTML5.png" alt="" width={"20px"} />
            </div>

            <img
              src="src\assets\Images\Profile.jpeg"
              alt=""
              width={"400px"}
              className="profile-main"
            />
          </div>
          <div>
            <div className="tech-icon">
              <img src="src\assets\Images\Css.svg" alt="" width={"20px"} />
            </div>
            <div className="tech-icon">
              <img
                src="src\assets\Images\javascript-logo.webp"
                alt=""
                width={"20px"}
              />
            </div>
            <div className="tech-icon">
              <img
                src="\src\assets\Images\React-icon.png"
                alt=""
                width={"20px"}
              />
            </div>
            {/* --- */}
            <div className="tech-icon">
              <img
                src="\src\assets\Images\Tailwind.png"
                alt=""
                width={"20px"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
