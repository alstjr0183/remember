import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// route
import Intro from "../pages/intro/Intro";
import List from "../pages/list/List";
import Insert from "./../pages/insert/Insert";
import Reminder from "./../pages/reminder/Reminder";

function FrontRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/list" element={<List />} />
        <Route path="/insert" element={<Insert />} />
        <Route path="/reminder" element={<Reminder />} />
      </Routes>
    </Router>
  );
}

export default FrontRoutes;
