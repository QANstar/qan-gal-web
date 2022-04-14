import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import LeftNav from "../Components/LeftNav";
import "../assets/css/layout.css";

function Home() {
  return (
    <div className="home-content">
      <header className="left-nav">
        <LeftNav />
      </header>
      <main className="home-layout-main">
        <Outlet />
      </main>
    </div>
  );
}

export default Home;
