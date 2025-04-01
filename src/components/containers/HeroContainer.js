import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/HeroStyles.css';

const HeroContainer = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
        <div className="hero-txt">
            <h1>The Total Wellness Academic & Advocacy Network (T.W.A.A.N) LLC</h1>
            <p>Founded by Antoine McDonald</p>
        </div>
        <div className="hero-img-container">
            <div className="hero-img">
                <img src={require('../../assets/images/hero-img1.png')} alt="hero-img" />
            </div>
        </div>
        <div className="banner-row">
            <span>
                <h1>Make Reading Cool Again!</h1>
            </span>
        </div>
            <div className="hero-img-container">
                <div className="hero-img">
                    <img src={require('../../assets/images/hero-img2.png')} alt="hero-img" />
            </div>
        </div>
        <div className="hero-txt">
            <h1>Young Adult Book Club</h1>
            <p>meetings held weekly on Zoom</p>
        </div>
        <button className="full-row" onClick={() => navigate('/about')}>Learn More</button>
    </div>
  );
};

export default HeroContainer;
