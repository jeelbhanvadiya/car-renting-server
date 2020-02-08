import mongoose, { Schema } from "mongoose"
import timestamps from "mongoose-timestamp"

const buyerSchema = Schema({
  userId:mongoose.Schema.Types.ObjectId,
  vehicleId:mongoose.Schema.Types.ObjectId,
  aadharCardNumber: String,
  drivingLicenceNumber: String,
}).plugin(timestamps)

export const Buyer = mongoose.model("buyer", buyerSchema)
