import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoreStatus from "../component/CoreStatus";

export default function router() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CoreStatus />} />
        </Routes>
      </Router>
    </>
  );
}
