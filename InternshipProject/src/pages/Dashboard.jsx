import { useParams, useNavigate } from "react-router-dom";

const kpis = [
  { name: "Strikerate" },
  { name: "Yield" },
  { name: "Runrate" },
  { name: "Queuetime" },
];

function Dashboard() {
  const { location } = useParams();
  const navigate = useNavigate();

  const handleKpiClick = (kpi) => {
    navigate(`/kpi/${location}/${kpi}`);
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-800">
          {location} - KPI Dashboard
        </h1>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded"
        >
          🔙 Back
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi) => (
          <div
            key={kpi.name}
            onClick={() => handleKpiClick(kpi.name)}
            className="cursor-pointer bg-blue-100 p-6 rounded-xl shadow hover:bg-blue-200 transition"
          >
            <h2 className="text-lg font-semibold text-center text-blue-900">
              {kpi.name}
            </h2>
            <p className="text-sm text-center mt-2 text-gray-600">View details</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
