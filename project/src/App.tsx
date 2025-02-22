import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AccessMap from './components/AccessMap';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { GoogleMapsProvider } from './context/GoogleMapsContext';

function App() {
  return (
    <Router>
      <GoogleMapsProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/routes" element={<AccessMap />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </GoogleMapsProvider>
    </Router>
  );
}

export default App;