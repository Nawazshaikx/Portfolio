import React from "react";
import "./ContactForm.css";
function ContactForm() {
  return (
    <div className="contact-form-content">
      <form>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="FirstName" />
          <input type="text" name="lasstname" placeholder="Last Name" />
        </div>
        <input type="text" name="email" placeholder="Email" />
        <textarea type="text" name="message" placeholder="Message" rows={3} />
        <button>SEND</button>
      </form>
    </div>
  );
}

export default ContactForm;
