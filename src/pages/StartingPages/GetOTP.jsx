import React, { useState } from "react";
import './GetOTP.css';
import otpImage from '../../Images/OTP.png';
import logo from '../../Images/Printable logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { requestNotificationPermission } from "../../firebaseConfig";

const GetOTP = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const mobileNumber = location.state?.mobileNumber || "Unavailable";

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState(false);

  const sendOtpToNumber = async (number) => {
    try {
      await requestNotificationPermission();
      console.log(`Sending OTP to: ${number}`);
      alert(`OTP sent successfully to ${number}`);
    } catch (err) {
      console.error("Error sending OTP:", err);
      alert("Failed to send OTP. Please try again.");
    }
  };

  const handleGetOTPClick = () => {
    if (!termsAccepted) {
      setError(true);
      return;
    }

    sendOtpToNumber(mobileNumber);
    navigate('/verification-code', { state: { mobileNumber } });
  };

  console.log("Mobile number received in GetOTP:", mobileNumber);

  return (
    <div className="full-page-container">
      <div className="left-background">
        <img src={otpImage} alt="OTP background" />
      </div>
      <div className="right-background">
        <img src={logo} alt="Logo" className="top-right-logo" />
        <h1 className="otp-verification-text">OTP Verification</h1>
        <p className="subtext">We will send you One Time Password on your Phone Number</p>
        <div className="input-container">
          <label htmlFor="mobile-number" className="mobile-label">Mobile number</label>
          <div className="mobile-input-wrapper">
            <span className="country-code">+91</span>
            <input type="text" id="mobile-number" value={mobileNumber} readOnly className="mobile-input" />
          </div>
          <div className="terms-container">
            <input
              type="checkbox"
              id="terms-checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label htmlFor="terms-checkbox" className={`terms-text ${error && !termsAccepted ? "error" : ""}`}>
              I have read and agreed to <a href="#">Terms, Conditions</a> and <a href="#">Privacy Policy</a>
            </label>
          </div>
          <button className="cta-button" onClick={handleGetOTPClick}>Get OTP</button>
        </div>
      </div>
    </div>
  );
};

export default GetOTP;
