import React from "react";
import "./SignUp.css";
import crypto from "../Assets/twim_case_new.png";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="container">
        <div className="left">
          <img src={crypto} alt="/" />
        </div>

        <div className="right">
          <h2>Earn passive with Crypto.</h2>
          <p>Earn upto 12% annual rewards on 30+ digital assets</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
