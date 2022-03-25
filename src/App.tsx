import React from "react";
import { Routes, Route } from "react-router-dom";
import Load from "./view/load";
import HomeLayout from "./Layout/homeLayout";
import Play from "./view/play";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="load" element={<Load />} />
      </Route>
      <Route path="/play" element={<Play />} />
    </Routes>
  );
}

export default App;
