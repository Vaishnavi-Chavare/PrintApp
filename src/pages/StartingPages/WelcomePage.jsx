import React from 'react';
import './welcomePage.css';
import logo from '../../Images/Img.1.png'; // Ensure this path is correct

const WelcomePage = () => {
  return (
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
        <button className="cta-button">Getting Started</button>
      </div>
    </div>
  );
};

export default WelcomePage;
