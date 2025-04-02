import React from 'react';
import { Container } from 'react-bootstrap';
import HeroContainer from './containers/HeroContainer';
// import './styles/HomeStyles.css'; // Keep or remove based on whether you still need custom styles

function Home() {
    return (
    <Container fluid className='home-bootstrap-container p-0'>
      <HeroContainer />
    </Container>
  );
}

export default Home; 