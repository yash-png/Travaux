import React from "react";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} />
      </Routes> 
    </Router>
  </div>);
}

export default App;
