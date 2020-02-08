import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";

const vehicleSchema = Schema({
  userId:mongoose.Schema.Types.ObjectId,
  company:String,
  color:String,
  fuelType:String,
  model:String,
  seat:Number,
  rentValue:String,
  photos:Array,
  vehicleNumber:String,
  status:String,
  country:String,
  state:String,
  city:String,
  pincode:String,
  transmission:String,
  dateOfRegister:String,
}).plugin(timestamps);

export const Vehicle = mongoose.model("vehicle", vehicleSchema);
