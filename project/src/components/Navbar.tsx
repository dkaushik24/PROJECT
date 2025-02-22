import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Home, Info, Mail, Armchair as Wheelchair } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold flex items-center gap-2">
          <Wheelchair size={24} />
          AccessMap
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-white flex items-center gap-1">
            <Home size={20} /> Home
          </Link>
          <Link to="/routes" className="text-white flex items-center gap-1">
            <MapPin size={20} /> Find Routes
          </Link>
          <Link to="/about" className="text-white flex items-center gap-1">
            <Info size={20} /> About Us
          </Link>
          <Link to="/contact" className="text-white flex items-center gap-1">
            <Mail size={20} /> Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;