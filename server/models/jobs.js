import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
    },
    description: {
      type: String,
    },
    location: {
      type: Array,
      default: [],
    },
    salary: {
      type: Object,
      default: {
        lowerBound: Number,
        upperBound: Number,
        period: String,
      },
    },
    requiredSkills: {
      type: Array,
      default: [],
    },
    education: {
      type: String,
      default: [],
    },
    workSector: {
      type: String,
    },
    jobType: {
      type: String,
    },
    experience: {
      type: String,
    },
    queries: {
      type: Array,
    },
    popularity: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Jobs = mongoose.model("Job", jobSchema);
export default Jobs;
