import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div id="footer2">
        <footer>
          <ul className="navCat">
            <li className="topLevel">About</li>
            <li>About Us</li>
            <li>Our Story</li>
            <li>FAQ</li>
          </ul>
          <ul className="navCat">
            <li className="topLevel">Services</li>
            <li>Custom Orders</li>
            <li>Wholesale</li>
          </ul>
          <ul className="navCat">
            <li className="topLevel">Contact</li>
            <li>Customer Service</li>
            <li>Careers</li>
            <li>Community</li>
            <li>Social Media</li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
