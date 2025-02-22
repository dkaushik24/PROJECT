import React, { useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 43.6532,
  lng: -79.3832
};

const AccessMap = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="p-4">
      <div className="max-w-2xl mx-auto mb-6">
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter a location..."
            className="flex-1 p-2 border rounded-lg"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Search
          </button>
        </form>
      </div>
      <div className="rounded-lg shadow-md overflow-hidden">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  );
};

export default AccessMap;