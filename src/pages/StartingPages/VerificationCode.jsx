import React, { useState } from "react";
import "./VerificationCode.css";
import otpVerifyImage from "../../Images/OTP Verify.png";
import logo from "../../Images/Printable logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const VerificationCodePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mobileNumber = location.state?.mobileNumber; // Use mobile number passed from the previous page
  const [otp, setOtp] = useState(["", "", "", ""]); // OTP as an array
  const [isVerifying, setIsVerifying] = useState(false); // Track if verification is in progress

  // Handle input change for OTP
  const handleInputChange = (value, index) => {
    if (isNaN(value)) return; // Ignore non-numeric input
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input box
    if (value && index < 3) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  // Verify OTP and show the loading animation
  const handleVerifyOTP = () => {
    const fullOtp = otp.join(""); // Combine OTP array into a string
    const confirmationResult = window.confirmationResult;

    setIsVerifying(true); // Show the loading animation

    // Navigate to /verifying immediately after clicking the Verify OTP button
    navigate("/verifying");

    confirmationResult
      .confirm(fullOtp)
      .then((result) => {
        console.log("User verified:", result.user);
        alert("OTP verified successfully!");

        // Simulate loading for 2 seconds, then navigate to the next page
        setTimeout(() => {
          setIsVerifying(false);
          navigate("/create-profile1"); // Navigate to CreateProfile1 page after OTP verification
        }, 2000);
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error.message);
        alert("Invalid OTP. Please try again.");
        setIsVerifying(false); // Hide the loading animation
      });
  };

  if (isVerifying) {
    return (
      <div className="verifying-container">
        <img src={logo} alt="Logo" className="top-right-logo" />
        <div className="loading-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <p className="verifying-text">Verifying</p>
      </div>
    );
  }

  return (
    <div className="full-page-container">
      <div className="left-background">
        <img src={otpVerifyImage} alt="OTP Verify" />
      </div>
      <div className="right-background">
        <img src={logo} alt="Logo" className="top-right-logo" />
        <h1 className="otp-verification-text">Verification Code</h1>
        <p className="subtext">
          We have sent the verification code to your mobile number{" "}
          <strong>{mobileNumber}</strong>
        </p>
        <div className="otp-container">
          {/* Render 4 OTP boxes */}
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              id={`otp-input-${index}`}
              className="otp-box"
              maxLength="1"
              value={value}
              onChange={(e) => handleInputChange(e.target.value, index)}
              onFocus={(e) => e.target.select()} // Highlight text on focus
            />
          ))}
        </div>
        <button className="cta-button" onClick={handleVerifyOTP}>
          Verify OTP
        </button>
        <p className="resend-text">
          Resend OTP in <span className="resend-timer">02:46</span>
        </p>
      </div>
    </div>
  );
};

export default VerificationCodePage;
