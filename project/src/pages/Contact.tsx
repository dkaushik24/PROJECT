import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: 'kaushikdakshi24@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.issue
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', issue: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <p className="mb-4">
          Contact us if there is any problem or to report an issue. We're here to help!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="issue" className="block text-gray-700 mb-2">Issue</label>
          <textarea
            id="issue"
            value={formData.issue}
            onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
            className="w-full p-2 border rounded-lg h-32"
            required
          />
        </div>

        <button 
          type="submit" 
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;