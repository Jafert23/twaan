import React from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    const About = () => {
      navigate('/about');
    };
  return (
    <div className='home-container'>
      <h1>The Total Wellness, Academic and Advocacy Network (T.W.A.A.N) LLC</h1>
      <h3>Founded by Antoine McDonald</h3>
      <div className="home-content">
            <h2>
            The Total Wellness Academic, and Advocacy Network LLC is a black owned company committed to developing and improving literacy skills among black and brown youth through interactive book club sessions.
            </h2>
            <h2>
            Participants of TWAAN's book club sessions gain fundamental reading and literacy skills, and gain exposure to the skillsets necessary for a life that encompasses total wellness.
            </h2>
            <h2>
            Our company promotes <strong>wellness</strong>, <strong>intellectual curiosity</strong>, and <strong>personal growth</strong>.
            </h2>
      </div>
      <button className="learn-more-button" onClick={About}>Learn More</button>
      </div>
  );
}

export default Home; 