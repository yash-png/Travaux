import React, { useEffect } from "react";
import Candidate from "../features/candidate/Candidate";
import Profile from "../features/profile/Profile";
import Jobs from "../features/jobs/Jobs";
const Dashboard = ({ features }) => {
  return (
    <div style={{ height: "80vh", overflowY: "scroll" }}>
      {features.Candidates === true && <Candidate />}
      {features.Jobs === true && <Jobs />}
      {features.Profile === true && <Profile />}
    </div>
  );
};

export default Dashboard;
