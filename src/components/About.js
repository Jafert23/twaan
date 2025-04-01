import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  const Home = () => {
    navigate('/');
  };
  return (
    <div>
      <h1>About</h1>
      <button onClick={Home}>Home</button>
    </div>
  );
}

export default About; 
