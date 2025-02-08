// import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import "./App.css";
// import Skills from "./components/Skills/Skills";
// import WorkExperience from "./components/Workexperience/WorkExperience";
// import ContactMe from "./components/ContactMe/ContactMe";
// import Footer from "./components/Footer/Footer";
// function App() {
//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <Hero />
//         <Skills />
//         <WorkExperience />
//         <ContactMe />
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default App;

// ------------------------------------------------------------------------------

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/Workexperience/WorkExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
