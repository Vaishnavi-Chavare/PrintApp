import React from 'react';
import './logoPage.css';
import logo from '../../Images/Logomain.png'; // Adjust the path based on your project structure

const LogoPage = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default LogoPage;
