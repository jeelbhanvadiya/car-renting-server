import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";

const shareJourneySchema = Schema({
  fullName: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  pickup: {
    type: String,
    required: true
  },
  hours: {
    type: Number,
    required: true
  },
  dropLocation: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  seat: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },  modal: {
    type: String,
    required: true
  },
  minute: {
    type: Number,
    required: true
  },
  rent: {
    type: Number,
    required: true
  },
  photos: {
    type: Array,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  },
}).plugin(timestamps);

export const ShareJourney = mongoose.model("shareJourney", shareJourneySchema);
