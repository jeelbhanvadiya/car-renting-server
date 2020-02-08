import mongoose, { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";

const usersSchema = Schema({
  firstName:String,
  lastName:String,
  emailId:String,
  password:String,
  mobile:Number,
  address:String,
  gender:String,
  birthdate:String,
  country:String,
  state:String,
  city:String,
  pincode:Number,
  status:String,
  onboardingStatus:String
}).plugin(timestamps);

export const Users = mongoose.model("users", usersSchema);
