import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HeroStyles.css';

const HeroContainer = () => {
  return (
    <div className="hero-container">
        <div className="hero-txt">
            <h1>The Total Wellness Academic & Advocacy Network (T.W.A.A.N) LLC</h1>
            <p>Founded by Antoine McDonald</p>
            <Link to="/about">Learn More</Link>
        </div>
        <div className="hero-img">
            <img src={require('../../assets/images/hero-img1.png')} alt="hero-img" />
        </div>
        <div className="hero-img">
            <img src={require('../../assets/images/hero-img2.png')} alt="hero-img" />
        </div>
        <div className="hero-txt">
            <h1>The Total Wellness Academic & Advocacy Network (T.W.A.A.N) LLC</h1>
            <p>Founded by Antoine McDonald</p>
            <Link to="/about">Learn More</Link>
        </div>
    </div>
  );
};

export default HeroContainer;
