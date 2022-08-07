import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col col-1">
          <h1>
            My<span className="primary">Coin</span>
          </h1>
          <p>All Rights Reserved 2022.</p>
        </div>
        <div className="col">
          <h5>Support</h5>
          <span className="bar"></span>
            <a href="/">Contact Us</a>
            <a href="/">Chat</a>
            <a href="/">Help Center</a>
        </div>

        <div className="col">
          <h5>Developers</h5>
          <span className="bar"></span>
            <a href="/">Cloud</a>
            <a href="/">API</a>
            <a href="/">FAQ</a>

        </div>

        <div className="col">
          <h5>Company</h5>
          <span className="bar"></span>
            <a href="/">About</a>
            <a href="/">Information</a>
            <a href="/">Privacy</a>

        </div>

        <div className="col">
          <h5>Social</h5>
          <span className="bar"></span>
            <a href="/">
              <FaFacebook className="icon" />
            </a>
            <a href="/">
              <FaInstagram className="icon" />
            </a>
            <a href="/">
              <FaTwitter className="icon" />
            </a>

        </div>
      </div>
    </div>
  );
};

export default Footer;
