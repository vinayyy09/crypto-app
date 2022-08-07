import React from "react";
import "./Hero.css";
import Crypto from "../Assets/wallet-control-funds.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <p>Buy & Sell crypto hastle free on your device.</p>
          <h1>Invest in Cryptocurrency with your IRA</h1>
          <p>Buy, Sell & store hundreds of cryptocurrencies.</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>

        <div className="right">
          <div className="img-container">
            <img src={Crypto} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
