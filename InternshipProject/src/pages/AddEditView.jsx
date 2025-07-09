import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function AddEditView() {
  const navigate = useNavigate();
  const { location, kpi } = useParams();
  const query = new URLSearchParams(useLocation().search);
  const editId = query.get("edit");

  const [formData, setFormData] = useState({
    site_id: "",
    grade: "",
    tdc: "",
    strikerate: "",
  });

  useEffect(() => {
    // In real app, fetch existing data using editId
    if (editId) {
      const sample = {
        site_id: "SITE-1010",
        grade: "A",
        tdc: "AU44",
        strikerate: "67%",
      };
      setFormData(sample); // Replace with fetched data in real app
    }
  }, [editId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.site_id || !formData.grade || !formData.tdc || !formData.strikerate) {
      alert("Please fill all fields.");
      return;
    }

    if (editId) {
      alert("Data updated successfully!");
    } else {
      alert("New data added successfully!");
    }

    navigate(`/table/${location}/${kpi}`);
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow rounded mt-10">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">
        {editId ? "✏️ Edit" : "➕ Add"} {kpi} for {location}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Site ID</label>
          <input
            name="site_id"
            value={formData.site_id}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Grade</label>
          <select
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          >
            <option value="">Select Grade</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">TDC</label>
          <select
            name="tdc"
            value={formData.tdc}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          >
            <option value="">Select TDC</option>
            <option value="AU44">AU44</option>
            <option value="BU22">BU22</option>
            <option value="CU11">CU11</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Strikerate</label>
          <input
            name="strikerate"
            value={formData.strikerate}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            placeholder="e.g., 75%"
          />
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            🔙 Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            💾 {editId ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEditView;
