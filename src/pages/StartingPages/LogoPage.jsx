import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './logoPage.css';
import logo from '../../Images/Logomain.png'; // Adjust the path based on your project structure

const LogoPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/welcome'); // Redirect to WelcomePage after 10 seconds
    }, 10000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default LogoPage;
