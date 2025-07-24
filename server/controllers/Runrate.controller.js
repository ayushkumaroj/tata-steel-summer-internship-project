import {
  JamsedpurRunRateModel,
  KolkataRunRateModel,
  OdishaRunRateModel,
  MumbaiRunRateModel // you had typo: used `MumbaiQueueTimeModel` before
} from "../models/location.js";

const REQUIRED_FIELDS = ['SITE_ID', 'TDC', 'OPERATION', 'QUALITY_CODE', 'RUNRATE'];

// Helper function
const getRunRateModel = (location) => {
  switch (location) {
    case "Jamsedpur":
      return JamsedpurRunRateModel;
    case "Kolkata":
      return KolkataRunRateModel;
    case "Odisha":
      return OdishaRunRateModel;
    case "Mumbai":
      return MumbaiRunRateModel;
    default:
      return null;
  }
};

// Create RunRate
const createRunRate = async (req, res) => {
  const location = req.params.location;
  const data = req.body;

  const missingFields = REQUIRED_FIELDS.filter(field => !data[field]);
  if (missingFields.length > 0) {
    return res.status(400).json({ message: `Missing fields: ${missingFields.join(', ')}` });
  }

  const Model = getRunRateModel(location);
  if (!Model) return res.status(400).json({ message: "Invalid location" });

  try {
    const runRate = new Model(data);
    const saved = await runRate.save();
    return res.status(201).json({ message: "Run rate created", data: saved });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get All RunRates
const getRunRates = async (req, res) => {
  const location = req.params.location;
  const Model = getRunRateModel(location);
  if (!Model) return res.status(400).json({ message: "Invalid location" });

  try {
    const all = await Model.find().sort({ createdAt: -1 });
    return res.status(200).json(all);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update RunRate
const updateRunRate = async (req, res) => {
  const location = req.params.location;
  const id = req.params.id;
  const updates = req.body;

  const Model = getRunRateModel(location);
  if (!Model) return res.status(400).json({ message: "Invalid location" });

  try {
    const updated = await Model.findByIdAndUpdate(id, updates, { new: true });
    if (!updated) return res.status(404).json({ message: "Run rate not found" });

    return res.status(200).json({ message: "Run rate updated", data: updated });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete RunRate
const deleteRunRate = async (req, res) => {
  const location = req.params.location;
  const id = req.params.id;

  const Model = getRunRateModel(location);
  if (!Model) return res.status(400).json({ message: "Invalid location" });

  try {
    const deleted = await Model.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Run rate not found" });

    return res.status(200).json({ message: "Run rate deleted", data: deleted });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

export {
  createRunRate,
  getRunRates,
  updateRunRate,
  deleteRunRate
};
