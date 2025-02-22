import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          AccessMap is dedicated to making navigation easier for wheelchair users.
          We believe everyone deserves the freedom to explore their world with confidence.
        </p>
        <p className="text-xl font-semibold text-blue-600">
          Get Moving!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <img 
          src="https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?auto=format&fit=crop&w=800&q=80" 
          alt="Community support" 
          className="rounded-lg shadow-md"
        />
        <img 
          src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80" 
          alt="Accessible path" 
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Who Are We</h2>
        <p className="mb-4">
          We are a team of dedicated individuals committed to making the world more accessible.
          Our diverse team brings together expertise in technology, accessibility, and community engagement.
        </p>
        <p>
          Together, we work to create solutions that empower wheelchair users to navigate their environment
          with greater ease and independence.
        </p>
      </div>
    </div>
  );
};

export default About;