import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './OTPverification.css';
import otpImage from '../../Images/OTP.png';
import logo from '../../Images/Printable logo.png';

const OTPverification = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleGetOTPClick = () => {
    if (mobileNumber.length !== 10 || !termsAccepted) {
      setError(true);
      return;
    }
    console.log("Navigating with mobile number:", mobileNumber);
    navigate('/get-otp', { state: { mobileNumber } });
  };

  return (
    <div className="full-page-container">
      <div className="left-background">
        <img src={otpImage} alt="Logo in left background" />
      </div>
      <div className="right-background">
        <img src={logo} alt="Logo in top-right corner" className="top-right-logo" />
        <h1 className="otp-verification-text">OTP Verification</h1>
        <p className="subtext">We will send you One Time Password on your Phone Number</p>
        <div className="input-container">
          <label htmlFor="mobile-number" className="mobile-label">Mobile number</label>
          <div className={`mobile-input-wrapper ${error && mobileNumber.length !== 10 ? "error" : ""}`}>
            <span className="country-code">+91</span>
            <input
              type="text"
              id="mobile-number"
              placeholder="Enter Your Number"
              className="mobile-input"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <div className="terms-container">
            <input
              type="checkbox"
              id="terms-checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label
              htmlFor="terms-checkbox"
              className={`terms-text ${error && !termsAccepted ? "error" : ""}`}
            >
              I have read and agreed to <a href="#">Terms, Conditions</a> and <a href="#">Privacy Policy</a>
            </label>
          </div>
          <button className="cta-button" onClick={handleGetOTPClick}>Get OTP</button>
        </div>
      </div>
    </div>
  );
};

export default OTPverification;
