import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: {
    type: mongoose.Schema.Types.Mixed,
  },
  password: {
    type: String,
    required: true,
  },
  //   phoneNumber: {
  //     type: Number,
  //     validate: {
  //       validator: function (v) {
  //         return v.toString().length === 10;
  //       },
  //       message: "{VALUE} is not a valid phone number!",
  //     },
  //     required: true,
  //   },
  resume: {
    type: mongoose.Schema.Types.Mixed,
  },
  savedJobs: {
    type: Array,
    default: [],
  },
  appliedJobs: {
    type: Array,
    default: [],
  },
  interests: {
    type: Array,
    default: [],
  },
});

const User = mongoose.model("User", userSchema);
export default User;
