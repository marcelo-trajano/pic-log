const mongoose = require("mongoose");
const { Schema } = mongoose;

const requiredNumber = {
  type: Number,
  required: true,
};

const LogEntrySchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    comments: String,
    image: String,
    rating: { type: Number, min: 0, max: 5, default: 0 },
    latitude: requiredNumber,
    longetude: requiredNumber,
    visitDate: { type: Date, required: true },
  },
  { timestamps: true }
);

const LogEntry = mongoose.model("LogEntry", LogEntrySchema);

module.exports = LogEntry;
