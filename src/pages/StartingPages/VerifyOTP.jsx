import React from "react";
import "./VerifyOTP.css"; // Ensure this matches your CSS file name

const VerifyOTP = () => {
  return (
    <div className="full-page-container">
      {/* Left background section with image and gradient blend */}
      <div className="left-background">
        <img src={require("../../Images/OTP Verify.png")} alt="Logo in left background" />
      </div>

      {/* Right background section with content */}
      <div className="right-background">
        {/* Top-right corner logo */}
        <img src={require("../../Images/Printable logo.png")} alt="Logo in top-right corner" className="top-right-logo" />
        
        <h1 className="otp-verification-text">Verification Code</h1>
        <p className="subtext">We have sent the verification code to your mobile number</p>

        <div className="terms-container">
          <label htmlFor="terms-checkbox" className="terms-text">
            123 456 7890 - <a href="#" className="terms-link">Change</a>
          </label>
        </div>

        {/* OTP input boxes below the terms link */}
        <div className="otp-container">
          <input type="text" className="otp-box" maxLength="1" placeholder="1" />
          <input type="text" className="otp-box" maxLength="1" placeholder="4" />
          <input type="text" className="otp-box" maxLength="1" placeholder="3" />
          <input type="text" className="otp-box" maxLength="1" placeholder="2" />
        </div>

        <button className="cta-button">Verify OTP</button>
        <p className="resend-text">
          Resend OTP in <span className="resend-timer">02:46</span>
        </p>
      </div>
    </div>
  );
};

export default VerifyOTP;
