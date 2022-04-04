import Jobs from "../models/jobs.js";

const getJobs = async (req, res) => {
  // const user = req.user;

  let user = {
    _id: "1",
    interests: ["teaching", "ms-office", "tally", "computer", "java"],
  };

  // const filters = req.body;
  const filters = {};
  try {
    const jobs = await Jobs.find(filters).sort({ popularity: "descending" });
    console.log(jobs);
    res.send(jobs);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const getJobById = async (req, res) => {
  const jobId = req.params.jobId;
  try {
    const job = await Jobs.findById(jobId);
    if (!job) return res.status(400).send({ err: "No posts found!" });
    res.send(job);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export { getJobs };
