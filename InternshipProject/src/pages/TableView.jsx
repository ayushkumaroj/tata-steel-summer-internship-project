import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

// Sample dummy data
const sampleData = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  site_id: `SITE-${1000 + i}`,
  grade: ["A", "B", "C"][i % 3],
  tdc: ["AU44", "BU22", "CU11"][i % 3],
  strikerate: `${Math.floor(Math.random() * 100)}%`,
}));

function TableView() {
  const { location, kpi } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(sampleData);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [selectedTDCs, setSelectedTDCs] = useState([]);
  const [selectedGrades, setSelectedGrades] = useState([]);

  // Filter Logic
  const filteredData = data.filter((row) => {
    const matchesSearch =
      row.tdc.toLowerCase().includes(search.toLowerCase()) ||
      row.site_id.toLowerCase().includes(search.toLowerCase());

    const matchesTDC =
      selectedTDCs.length === 0 || selectedTDCs.includes(row.tdc);

    const matchesGrade =
      selectedGrades.length === 0 || selectedGrades.includes(row.grade);

    return matchesSearch && matchesTDC && matchesGrade;
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleDelete = (id) => {
    const confirm = window.confirm("Delete this row?");
    if (confirm) {
      setData(data.filter((d) => d.id !== id));
    }
  };

  // ✅ Export to CSV
  const handleExportCSV = () => {
    if (filteredData.length === 0) return;

    const csvHeaders = Object.keys(filteredData[0]).join(",") + "\n";
    const csvRows = filteredData
      .map((row) => Object.values(row).join(","))
      .join("\n");

    const blob = new Blob([csvHeaders + csvRows], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${location}_${kpi}.csv`;
    a.click();
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header with Action Buttons */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <h2 className="text-xl font-bold text-blue-900">
          {location} - {kpi} Data
        </h2>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={handleExportCSV}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            ⬇️ Export CSV
          </button>
          <button
            onClick={() => navigate(`/add/${location}/${kpi}`)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            ➕ Add New
          </button>
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            🔙 Back
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by TDC or Site ID..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded"
        />
      </div>

      {/* Main layout: Sidebar + Table */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filter Sidebar */}
        <div className="w-full lg:w-64 bg-white border rounded p-4 shadow-sm">
          <h3 className="font-semibold mb-3 text-blue-700">Filters</h3>

          {/* TDC Filter */}
          <div className="mb-4">
            <h4 className="font-medium text-gray-700 mb-1">TDC</h4>
            {["AU44", "BU22", "CU11"].map((tdc) => (
              <div key={tdc}>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedTDCs.includes(tdc)}
                    onChange={(e) => {
                      setSelectedTDCs((prev) =>
                        e.target.checked
                          ? [...prev, tdc]
                          : prev.filter((item) => item !== tdc)
                      );
                      setCurrentPage(1);
                    }}
                  />
                  {tdc}
                </label>
              </div>
            ))}
          </div>

          {/* Grade Filter */}
          <div>
            <h4 className="font-medium text-gray-700 mb-1">Grade</h4>
            {["A", "B", "C"].map((grade) => (
              <div key={grade}>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedGrades.includes(grade)}
                    onChange={(e) => {
                      setSelectedGrades((prev) =>
                        e.target.checked
                          ? [...prev, grade]
                          : prev.filter((item) => item !== grade)
                      );
                      setCurrentPage(1);
                    }}
                  />
                  {grade}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Data Table */}
        <div className="flex-1 overflow-auto rounded shadow bg-white">
          <table className="w-full table-auto">
            <thead className="bg-blue-200 text-blue-900">
              <tr>
                <th className="p-2 text-left">ID</th>
                <th className="p-2 text-left">Site ID</th>
                <th className="p-2 text-left">Grade</th>
                <th className="p-2 text-left">TDC</th>
                <th className="p-2 text-left">Strikerate</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row) => (
                <tr key={row.id} className="border-t">
                  <td className="p-2">{row.id}</td>
                  <td className="p-2">{row.site_id}</td>
                  <td className="p-2">{row.grade}</td>
                  <td className="p-2">{row.tdc}</td>
                  <td className="p-2">{row.strikerate}</td>
                  <td className="p-2 space-x-2">
                    <button
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded"
                      onClick={() =>
                        navigate(`/add/${location}/${kpi}?edit=${row.id}`)
                      }
                    >
                      ✏️ Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                      onClick={() => handleDelete(row.id)}
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredData.length === 0 && (
            <p className="p-4 text-center text-gray-500">No matching data found.</p>
          )}

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-4 px-4 pb-4">
            <div>
              <label className="mr-2 font-medium">Rows per page:</label>
              <select
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(parseInt(e.target.value));
                  setCurrentPage(1);
                }}
                className="border border-gray-300 px-2 py-1 rounded"
              >
                {[10, 25, 50, 100].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
              >
                ◀ Prev
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
              >
                Next ▶
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableView;
