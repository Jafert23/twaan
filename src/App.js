import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Signup from './components/pages/Signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/components/pages/Home.js">Home</Link>
          <Link to="/components/pages/About.js">About</Link>
          <Link to="/components/pages/Signup.js">Signup</Link>
        </nav>
      </header>
      
      <main>
        <Routes>
          <Route path="/components/pages/Home.js" element={<Home />} />
          <Route path="/components/pages/About.js" element={<About />} />
          <Route path="/components/pages/Signup.js" element={<Signup />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
