import express from "express";
const router = express.Router();

import { getJobs, getJobById } from "../controllers/jobs.js";

router.post("/getJobs", getJobs);

router.get("/job/jobId", getJobById);

export { router as jobsRoute };
