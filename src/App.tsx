import React from "react";
import { Routes, Route } from "react-router-dom";
import Load from "./view/load";
import HomeLayout from "./Layout/homeLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="load" element={<Load />} />
      </Route>
    </Routes>
  );
}

export default App;
