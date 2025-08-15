import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
         <img src="logo-white.svg.png" ></img></div>
        <div className="footer-social">
          <span>Follow Us</span>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>

      <hr />

      <div className="footer-main">
        <div className="footer-col">
          <h4>Subscribe</h4>
          <div className="subscribe-box">
            <input type="email" placeholder="Your e-mail" />
            <button>Send →</button>
          </div>
          <p>Subscribe to our newsletter to receive our weekly feed.</p>
        </div>

        <div className="footer-col">
          <h4>Discover</h4>
          <ul>
            <li>Miami</li>
            <li>New York</li>
            <li>Chicago</li>
            <li>Florida</li>
            <li>Los Angeles</li>
            <li>San Diego</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>FAQ's</li>
            <li>Blog</li>
            <li>Pricing Plans</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>hi@justhome.com</p>
          <p>(123) 456-7890</p>
        </div>

        <div className="footer-col">
          <h4>Our Address</h4>
          <p>99 Fifth Avenue, 3rd Floor</p>
          <p>San Francisco, CA 1980</p>
        </div>

        <div className="footer-col">
          <h4>Get the app</h4>

          <button className="app-btn"><img src="SVG.svg"></img>
          <div className="btn-info"><p>
            Download on the
            </p>
            <h3>Apple Store</h3></div>
          </button>
         <button className="app-btn"><img src="SVG (1).svg"></img>
          <div className="btn-info"><p>
          Get in on
            </p>
            <h3>Google Play</h3></div>
          </button>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>Copyright © 2025. JustHome</p>
      </div>
    </footer>
  );
};

export default Footer;
