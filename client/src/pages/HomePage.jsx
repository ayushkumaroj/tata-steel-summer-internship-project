import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const locations = ['Kolkata', 'Odisha', 'Mumbai', 'Jamshedpur'];

  const handleNavigate = (location) => {
    const path = location.toLowerCase().replace(/\s+/g, '-');
    navigate(`dashboard/${path}`);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">Select Location</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {locations.map((location) => (
          <div
            key={location}
            role="button"
            tabIndex={0}
            onClick={() => handleNavigate(location)}
            onKeyDown={(e) => e.key === 'Enter' && handleNavigate(location)}
            className="cursor-pointer p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center text-lg font-medium hover:bg-blue-50"
          >
            {location}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
