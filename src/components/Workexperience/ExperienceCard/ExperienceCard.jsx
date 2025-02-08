// import React from "react";
// import "./ExperienceCard.css";
// function ExperienceCard({ details }) {
//   return (
//     <div className="work-experience-card">
//       <h6>{details.title}</h6>
//       <div className="work-duration">{details.date}</div>
//       <ul>
//         {details.responsibilities.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ExperienceCard;

import React from "react";
import "./ExperienceCard.css";

function ExperienceCard({ details }) {
  console.log(details, "--------------------------------------------------------------------")
  return (
    <div className="work-experience-card" style={{marginBottom:"10px"}}>
      {/* <h6>details</h6> */}
      <h6>{details.title}</h6>
      <div className="work-duration">{details.date}</div>
      <ul>
        {/* {details.responsibilities.map((item) => (
          <li key={id}>{item}</li>
        ))} */}

        {details.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;
