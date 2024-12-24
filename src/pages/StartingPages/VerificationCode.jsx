import React from "react";
import './VerificationCode.css'; // Adjust the path as needed
import otpVerifyImage from '../../Images/OTP Verify.png'; // Adjust path as needed
import logo from '../../Images/Printable logo.png'; // Adjust path as needed

const VerificationCodePage = () => {
  return (
    <div className="full-page-container">
      {/* Left Background with OTP Verify Image */}
      <div className="left-background">
        <img src={otpVerifyImage} alt="Logo in left background" />
      </div>

      {/* Right Background with OTP Verification Content */}
      <div className="right-background">
        {/* Top-Right Corner Logo */}
        <img src={logo} alt="Logo in top-right corner" className="top-right-logo" />
        
        <h1 className="otp-verification-text">Verification Code</h1>
        <p className="subtext">We have sent the verification code to your mobile number</p>
        
        {/* Mobile Number with Change link */}
        <div className="terms-container">
          <label htmlFor="terms-checkbox" className="terms-text">
            123 456 7890 - <a href="#" className="terms-link">Change</a>
          </label>
        </div>

        {/* OTP Input Boxes */}
        <div className="otp-container">
          <input type="text" className="otp-box" maxlength="1" />
          <input type="text" className="otp-box" maxlength="1" />
          <input type="text" className="otp-box" maxlength="1" />
          <input type="text" className="otp-box" maxlength="1" />
        </div>

        <button className="cta-button">Verify OTP</button> 
        <p className="resend-text">Resend OTP in <span className="resend-timer">02:46</span></p>
      </div>
    </div>
  );
};

export default VerificationCodePage;
