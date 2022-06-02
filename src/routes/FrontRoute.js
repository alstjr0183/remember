import React from "react";
import { Route, Routes } from "react-router-dom";
// route

function FrontRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div>123</div>} />
    </Routes>
  );
}

export default FrontRoutes;
