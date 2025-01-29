import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './WelcomePage.css'; // Ensure CSS is scoped to "welcome-page"
import logo from '../../Images/Img.1.png'; // Ensure this path is correct

const WelcomePage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleGetStartedClick = () => {
    navigate('/otp'); // Navigate to OTP verification page when the button is clicked
  };

  return (
    <div className="welcome-page">
      {/* Full Page Container */}
      <div className="full-page-container">
        {/* Left Background with Logo */}
        <div className="left-background">
          <img src={logo} alt="Logo in left background" />
        </div>

        {/* Right Background with Welcome Message */}
        <div className="right-background">
          <div className="welcome-message">Welcome!</div>
          <div className="additional-text">
            Simplifies document scanning and organization, boosting productivity with easy sharing. Plus, it offers print
            selection and home delivery for added convenience.
          </div>
          <button className="cta-button" onClick={handleGetStartedClick}>
            Getting Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
