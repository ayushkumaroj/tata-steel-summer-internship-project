import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function AddEditForm() {
  const { location, kpi } = useParams();
  const navigate = useNavigate();
  const { search } = useLocation();

  const query = new URLSearchParams(search);
  const editId = query.get("edit");

  // Initial state (modify based on KPI)
  const [formData, setFormData] = useState({
    site_id: "",
    grade: "",
    tdc: "",
    strikerate: "",
  });

  useEffect(() => {
    if (editId) {
      // Fetch from localStorage (for now)
      const saved = JSON.parse(localStorage.getItem("data")) || [];
      const item = saved.find((row) => row.id === parseInt(editId));
      if (item) {
        setFormData(item);
      }
    }
  }, [editId]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const saved = JSON.parse(localStorage.getItem("data")) || [];

    if (editId) {
      // Update existing
      const updated = saved.map((row) =>
        row.id === parseInt(editId) ? { ...formData, id: parseInt(editId) } : row
      );
      localStorage.setItem("data", JSON.stringify(updated));
    } else {
      // Add new
      const newId = saved.length ? saved[saved.length - 1].id + 1 : 1;
      const newEntry = { ...formData, id: newId };
      saved.push(newEntry);
      localStorage.setItem("data", JSON.stringify(saved));
    }

    alert("Saved successfully!");
    navigate(`/kpi/${location}/${kpi}`);
  };

  return (
    <div className="min-h-screen p-6 bg-white">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">
        {editId ? "Edit" : "Add New"} Entry - {kpi} ({location})
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl bg-gray-100 p-6 rounded shadow space-y-4"
      >
        <div>
          <label className="block mb-1 font-medium">Site ID</label>
          <input
            type="text"
            name="site_id"
            value={formData.site_id}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Grade</label>
          <input
            type="text"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">TDC</label>
          <input
            type="text"
            name="tdc"
            value={formData.tdc}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Strikerate</label>
          <input
            type="text"
            name="strikerate"
            value={formData.strikerate}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-700 text-white hover:bg-blue-800 rounded"
          >
            {editId ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEditForm;
