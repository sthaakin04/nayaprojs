import React from "react";
import "./Contact.css"

export default function Contact() {
  return (
    <div className="contact">
     <form>      
        <input name="name" type="text" className="feedback-input" placeholder="Name" />   
        <input name="email" type="text" className="feedback-input" placeholder="Email" />
        <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
        <input type="submit" value="SUBMIT"/>
      </form>
    </div>
  );
}
