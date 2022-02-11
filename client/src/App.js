import React from "react";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Jobseeker from "./components/dashboard/jobs/Jobdashboard";
import Recruiter from "./components/dashboard/hireJob/Recruiter";
import Jobdashboard from "./components/dashboard/jobs/Jobdashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/register" element={<Register />} />{" "}
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/jobs" element={<Jobdashboard />} />{" "}
          <Route path="/recruit" element={<Recruiter />} />{" "}
          {/* <Route path="/dashboard/jobdetails" element={<Jobdetails />} />{" "} */}
        </Routes>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;



