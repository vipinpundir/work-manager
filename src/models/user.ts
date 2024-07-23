import mongoose from "mongoose";

const UserSachema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: [true, "Email Required !! "],
  },
  password: {
    type: String,
    require: [true, "Password Required !! "],
  },
  about: String,
  profileURL: String,
  // address: String,
  // street: String,
  // city: String,
  // country: String,
  // pinCode: Number
});

export const User =
  mongoose.models.users || mongoose.model("users", UserSachema);
