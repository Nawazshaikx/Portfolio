import React, { useRef } from "react";
import "./Workexperience.css";
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Slider from "react-slick";

function WorkExperience() {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };
  // console.log(WORK_EXPERIENCE)
  return (
    <section className="experience-container">
      <h5 style={{ marginBottom: "10px" }}>Work Experience</h5>
      <div className="experience-content">
        {/* <div className="arrow-right" onClick={slideRight}>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="arrow-left" onClick={slideLeft}>
          <span className="material-symbols-outlined">chevron_left</span>
        </div> */}

        {/* <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item, index) => (
            <ExperienceCard key={index} details={item} />
          ))}

          {WORK_EXPERIENCE.map((item) => {
            <ExperienceCard key={item.title} details={item} />;
          })} */}

        {/* ------ */}
        {WORK_EXPERIENCE.map((item) => {
          return <ExperienceCard key={item.title} details={item} />;
        })}
        {/* ----- */}
        {/* </Slider> */}

        {/* <ExperienceCard /> */}
      </div>
    </section>
  );
}

export default WorkExperience;
