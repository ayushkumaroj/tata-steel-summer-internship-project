import {
  JamsedpurQueueTimeModel,
  KolkataQueueTimeModel,
  OdishaQueueTimeModel,
  MumbaiQueueTimeModel
} from '../models/location.js';


// Helper to get model based on location
const getModel = (location) => {
  switch (location) {
    case "jamsedpur":
      return JamsedpurQueueTimeModel;
    case "kolkata":
      return KolkataQueueTimeModel;
    case "mumbai":
      return MumbaiQueueTimeModel;
    case "odisha":
      return OdishaQueueTimeModel;
    default:
      return null;
  }
};

const createQueueTime = async (req, res) => {
  const location = req.params.location;
  const data = req.body;



  const Model = getModel(location);
  if (!Model) return res.status(400).json({ message: "Invalid location" });

  try {
    const queueTime = new Model(data);
    const saved = await queueTime.save();
    return res.status(201).json({ message: "Queue time created", data: saved });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getQueueTime = async (req, res) => {
  const location = req.params.location;
  const Model = getModel(location);
  if (!Model) return res.status(400).json({ message: "Invalid location" });

  try {
    const queueTimes = await Model.find().sort({ createdAt: -1 });
    return res.status(200).json(queueTimes);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updateQueueTime = async (req, res) => {
  const location = req.params.location;
  const id = req.params.id;
  const updates = req.body;

  const Model = getModel(location);
  if (!Model) return res.status(400).json({ message: "Invalid location" });

  try {
    const updated = await Model.findByIdAndUpdate(id, updates, { new: true });
    if (!updated) return res.status(404).json({ message: "Queue time not found" });

    return res.status(200).json({ message: "Queue time updated", data: updated });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deleteQueueTime = async (req, res) => {
  const location = req.params.location;
  const id = req.params.id;

  const Model = getModel(location);
  if (!Model) return res.status(400).json({ message: "Invalid location" });

  try {
    const deleted = await Model.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Queue time not found" });

    return res.status(200).json({ message: "Queue time deleted", data: deleted });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

export {
  createQueueTime,
  getQueueTime,
  updateQueueTime,
  deleteQueueTime
};
