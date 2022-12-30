import React from "react";
import "./Contact.css"

export default function Contact() {
  return (
    <>
    <div class="modal">
    <div class="modal__container">
      <div class="modal__featured">
        <button type="button" class="button--transparent button--close">
          {/* <svg class="nc-icon glyph" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32"> */}
            <g><path fill="#ffffff" d="M1.293,15.293L11,5.586L12.414,7l-8,8H31v2H4.414l8,8L11,26.414l-9.707-9.707 C0.902,16.316,0.902,15.684,1.293,15.293z"></path> </g>
            {/* </svg> */}
          <span class="visuallyhidden">Return to Home Page</span>
        </button>
        <div class="modal__circle"></div>
        <img src="https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" class="modal__product" />
      </div>
      <div class="modal__content">
        <h2>Contact Us</h2>

        <form>
          <ul class="form-list">
            <li class="form-list__row">
              <label>Name</label>
              <input type="text" name="" required="" />
            </li>
            <li class="form-list__row">
              <label>Email</label>
              <input type="text" name="" required="" />
            </li>
            <li class="form-list__row">
              <label>Message</label>
              <input type="text" name="" required="" />
            </li>
            <li>
              <button type="submit" class="button">Submit</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </div>
    </>
  );
}
