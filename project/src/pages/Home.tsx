import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Heart, Navigation } from 'lucide-react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Making cities accessible for everyone</h1>
      
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="text-blue-600 flex justify-center mb-4">
            <MapPin size={48} />
          </div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            We're dedicated to helping wheelchair users navigate cities with confidence and independence.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="text-blue-600 flex justify-center mb-4">
            <Heart size={48} />
          </div>
          <h2 className="text-2xl font-bold mb-4">Our Goal</h2>
          <p className="text-gray-600">
            To create a world where accessibility is never a barrier to mobility and exploration.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="text-blue-600 flex justify-center mb-4">
            <Navigation size={48} />
          </div>
          <h2 className="text-2xl font-bold mb-4">Get Moving!</h2>
          <p className="text-gray-600">
            Start exploring accessible routes in your city today. Adventure awaits!
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link 
          to="/routes" 
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
        >
          <MapPin size={24} />
          Find Accessible Routes
        </Link>
      </div>

      <div className="mt-12">
        <img 
          src="https://images.unsplash.com/photo-1626802441736-345c8a3b481c?auto=format&fit=crop&w=1200&q=80" 
          alt="Accessible pathway" 
          className="rounded-lg mx-auto shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;