console.log("🏠 Home page rendered");

import { useNavigate } from "react-router-dom";

const locations = [
  { name: "Jamshedpur" },
  { name: "Odisha" },
  { name: "Mumbai" },
  { name: "Kolkata" },
];

function Home() {
  const navigate = useNavigate();

  const handleSelect = (location) => {
    navigate(`/dashboard/${location}`);
  };

  return (
    <div className="min-h-screen bg-black-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Choose a Plant Location
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {locations.map((loc) => (
          <div
            key={loc.name}
            onClick={() => handleSelect(loc.name)}
            className="cursor-pointer bg-white rounded-xl shadow-md p-8 hover:shadow-lg hover:bg-blue-50 transition"
          >
            <h2 className="text-xl font-semibold text-center text-gray-800">{loc.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
