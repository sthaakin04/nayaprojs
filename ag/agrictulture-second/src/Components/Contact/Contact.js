import React from "react";
import "./Contact.css"

export default function Contact() {
  return (
    <div id="contact">
      <form className="form">
        <h2>CONTACT US</h2>
        <p type="Name:"><input placeholder="Write your name here.."></input></p>
        <p type="Email:"><input placeholder="Let us know how to contact you back.."></input></p>
        <p type="Message:"><input placeholder="What would you like to tell us.."></input></p>
        <button>Send Message</button>
        <div>
          <span className="fa fa-phone"></span>9812345678
          <span className="fa fa-envelope-o"></span> global@company.com
        </div>
      </form>
    </div>
  );
}
