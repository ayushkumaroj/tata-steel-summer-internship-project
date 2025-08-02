import {
  JamsedpurStrikRateModel,
  MumbaiStrikRateModel,
  KolkataStrikRateModel,
  OdishaStrikRateModel
} from '../models/location.js';


const getStrikeRateModel = (location) => {
  switch (location) {
    case 'jamsedpur':
      return JamsedpurStrikRateModel;
    case 'mumbai':
      return MumbaiStrikRateModel;
    case 'kolkata':
      return KolkataStrikRateModel;
    case 'odisha':
      return OdishaStrikRateModel;
    default:
      return null;
  }
};

// Create
const createStrikeRate = async (req, res) => {
  const location = req.params.location;
  const data = req.body;

  

  const Model = getStrikeRateModel(location);
  if (!Model) return res.status(400).json({ message: 'Invalid location' });

  try {
    const doc = new Model(data);
    const saved = await doc.save();
    return res.status(201).json({ message: 'Strike Rate created', data: saved });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Read
const getStrikeRates = async (req, res) => {
  const location = req.params.location;

  const Model = getStrikeRateModel(location);
  if (!Model) return res.status(400).json({ message: 'Invalid location' });

  try {
    const all = await Model.find().sort({ createdAt: -1 });
    return res.status(200).json(all);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Update
const updateStrikeRate = async (req, res) => {
  const location = req.params.location;
  const id = req.params.id;

  const Model = getStrikeRateModel(location);
  if (!Model) return res.status(400).json({ message: 'Invalid location' });

  try {
    const updated = await Model.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Strike Rate not found' });

    return res.status(200).json({ message: 'Strike Rate updated', data: updated });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Delete
const deleteStrikeRate = async (req, res) => {
  const location = req.params.location;
  const id = req.params.id;

  const Model = getStrikeRateModel(location);
  if (!Model) return res.status(400).json({ message: 'Invalid location' });

  try {
    const deleted = await Model.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Strike Rate not found' });

    return res.status(200).json({ message: 'Strike Rate deleted', data: deleted });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export {
  createStrikeRate,
  getStrikeRates,
  updateStrikeRate,
  deleteStrikeRate
};
