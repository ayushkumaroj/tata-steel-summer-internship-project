import {
  MumbaiYieldModel,
  KolkataYieldModel,
  OdishaYieldModel,
  JamsedpurYieldModel
} from '../models/location.js';

const REQUIRED_FIELDS = ['SITE_ID', 'TDC', 'OPERATION', 'QUALITY_CODE', 'YIELD'];

// Helper: pick model based on location
const getYieldModel = (location) => {
  switch (location) {
    case 'Mumbai':
      return MumbaiYieldModel;
    case 'Kolkata':
      return KolkataYieldModel;
    case 'Odisha':
      return OdishaYieldModel;
    case 'Jamsedpur':
      return JamsedpurYieldModel;
    default:
      return null;
  }
};

// Create Yield
const createYield = async (req, res) => {
  const location = req.params.location;
  const data = req.body;

  const missing = REQUIRED_FIELDS.filter(field => !data[field]);
  if (missing.length > 0) {
    return res.status(400).json({ message: `Missing fields: ${missing.join(', ')}` });
  }

  const Model = getYieldModel(location);
  if (!Model) return res.status(400).json({ message: 'Invalid location' });

  try {
    const yieldEntry = new Model(data);
    const saved = await yieldEntry.save();
    return res.status(201).json({ message: 'Yield created', data: saved });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get All Yields
const getYields = async (req, res) => {
  const location = req.params.location;

  const Model = getYieldModel(location);
  if (!Model) return res.status(400).json({ message: 'Invalid location' });

  try {
    const all = await Model.find().sort({ createdAt: -1 });
    return res.status(200).json(all);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Update Yield
const updateYield = async (req, res) => {
  const location = req.params.location;
  const id = req.params.id;

  const Model = getYieldModel(location);
  if (!Model) return res.status(400).json({ message: 'Invalid location' });

  try {
    const updated = await Model.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Yield not found' });

    return res.status(200).json({ message: 'Yield updated', data: updated });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Delete Yield
const deleteYield = async (req, res) => {
  const location = req.params.location;
  const id = req.params.id;

  const Model = getYieldModel(location);
  if (!Model) return res.status(400).json({ message: 'Invalid location' });

  try {
    const deleted = await Model.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Yield not found' });

    return res.status(200).json({ message: 'Yield deleted', data: deleted });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export {
  createYield,
  getYields,
  updateYield,
  deleteYield
};
