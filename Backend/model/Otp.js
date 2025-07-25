import mongoose from "mongoose";

const OtpSchema = new mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  expiresAt: { type: Date, required: true },
  name: String,
  password: String,
  institute: String
});

export const Otp = mongoose.model("otp", OtpSchema);
