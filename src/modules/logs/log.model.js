import mongoose from "mongoose";

const logSchema = new mongoose.Schema(
  {
    deviceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Device",
      required: true,
    },
    scannedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    action: {
      type: String,
      enum: ["ENTRY", "EXIT"],
      required: true,
    },
    statusAtScan: String,
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Log = mongoose.model("Log", logSchema);
