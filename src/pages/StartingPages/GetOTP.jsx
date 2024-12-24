import React from "react";
import './GetOTP.css'; // Adjust the path as needed
import otpImage from '../../Images/OTP.png'; // Adjust path as needed
import logo from '../../Images/Printable logo.png'; // Adjust path as needed

const GetOTP = () => {
  return (
    <div className="full-page-container">
      {/* Left Background with OTP Image */}
      <div className="left-background">
        <img src={otpImage} alt="Logo in left background" />
      </div>

      {/* Right Background with OTP Verification Content */}
      <div className="right-background">
        {/* Top-Right Corner Logo */}
        <img src={logo} alt="Logo in top-right corner" className="top-right-logo" />
        
        <h1 className="otp-verification-text">OTP Verification</h1>
        <p className="subtext">We will send you One Time Password on your Phone Number</p>
        
        {/* Mobile Number Input and Terms Checkbox */}
        <div className="input-container">
          <label htmlFor="mobile-number" className="mobile-label">Mobile number</label>
          <div className="mobile-input-wrapper">
            <span className="country-code">+91</span>
            <input
              type="text"
              id="mobile-number"
              placeholder="123 456 7890"
              className="mobile-input"
            />
          </div>
          
          <div className="terms-container">
            <input type="checkbox" id="terms-checkbox" />
            <label htmlFor="terms-checkbox" className="terms-text">
              I have read and agreed to{" "}
              <a href="#" className="terms-link">Terms, Conditions</a> and{" "}
              <a href="#" className="privacy-link">Privacy Policy</a>
            </label>
          </div>
          
          <button className="cta-button">Get OTP</button>
        </div>
      </div>
    </div>
  );
};

export default GetOTP;
