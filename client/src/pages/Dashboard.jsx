import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Dashboard() {
  const { location } = useParams();
  const navigate = useNavigate();

  const sections = [
    { label: 'Strike Rate', path: 'strikerate' },
    { label: 'Run Rate', path: 'runrate' },
    { label: 'Yield', path: 'yield' },
    { label: 'Queue Time', path: 'queuetime' },
  ];

  const handleNavigate = (path) => {
    navigate(`/${path}/${location.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-8 capitalize">
        Dashboard - {location}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sections.map((section) => (
          <div
            key={section.path}
            onClick={() => handleNavigate(section.path)}
            className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl p-6 text-center font-semibold text-gray-700 hover:bg-blue-50 transition-all duration-200"
          >
            {section.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
