import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";

const paymentSchema = Schema({
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  reference: {
    type: String,
    required: true
  }
}).plugin(timestamps);

export const Payment = mongoose.model("payment", paymentSchema);
