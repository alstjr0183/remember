import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "../pages/intro/Intro";
// route

function FrontRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
    </Router>
  );
}

export default FrontRoutes;
