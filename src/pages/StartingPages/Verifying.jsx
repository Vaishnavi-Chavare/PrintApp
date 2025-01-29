import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Images/Printable logo.png'; // Ensure the path is correct
import './Verifying.css';

const Verifying = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to the Success page after 3 seconds
    const timer = setTimeout(() => {
      navigate('/success');
    }, 3000);

    // Cleanup timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="verifying-container">
      <img src={logo} alt="Logo" className="top-right-logo" />
      <div className="loading-dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <p className="verifying-text">Verifying...</p>
    </div>
  );
};

export default Verifying;
