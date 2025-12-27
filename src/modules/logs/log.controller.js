import { Log } from "./log.model.js";

export const getAllLogs = async (req, res) => {
  const logs = await Log.find()
    .populate("deviceId")
    .populate("scannedBy", "name role")
    .sort({ createdAt: -1 });

  res.json(logs);
};

export const getLogsByDevice = async (req, res) => {
  const { deviceId } = req.params;

  const logs = await Log.find({ deviceId })
    .populate("scannedBy", "name role")
    .sort({ createdAt: -1 });

  res.json(logs);
};
