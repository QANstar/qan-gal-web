import React from "react";
import { Outlet } from "react-router-dom";
import LeftNav from "../Components/LeftNav";
import "../assets/css/layout.css";
function home() {
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

export default home;
