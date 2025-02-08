import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";
import githubIcon from "../../assets/Images/github-icon.png";
import Emailicon from "../../assets/Images/Emailicon.png";
function ContactMe() {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard iconUrl={Emailicon} text="navazshaik16@gmail.com" />
          <ContactInfoCard
            iconUrl={githubIcon}
            text="https://github.com/Nawazshaikx"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
