import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
// Import Bootstrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// Import Page Components
import Home from './components/pages/Home';
import About from './components/pages/About';
import Signup from './components/pages/Signup';
// Import ScrollToTop utility
import ScrollToTop from './components/utils/ScrollToTop'; 

function App() {
  return (
    <div className="App">
      {/* Render ScrollToTop here, inside Router context but outside Routes */}
      <ScrollToTop /> 
      
      {/* Replace header/nav with Bootstrap Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top"> {/* Added sticky="top" */}
        <Container>
        <img
          src="https://dummyimage.com/100x100/000/bcbdcc.png&text=logo"
          alt="Logo"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
          <Navbar.Brand as={Link} to="/">T.W.A.A.N</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Use Nav.Link with as={Link} for React Router integration */}
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Keep the main content area */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
