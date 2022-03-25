import React from "react";
import LoadCard from "../Components/loadCard";
import IloadCard from "../interface/IloadCard";

function Load() {
  let data: IloadCard = {
    id: 1,
    event: "反射",
    img: "bg1.png",
    lines: "我...",
    date: new Date(),
  };
  return (
    <div className="load-content show-toright">
      <header>
        <div className="title">读取存档</div>
        <div className="title-child">Load</div>
      </header>
      <main className="load-main">
        <div className="load-list">
          <LoadCard data={data} />
          <LoadCard data={data} />
          <LoadCard data={data} />
          <LoadCard data={data} />
          <LoadCard data={data} />
          <LoadCard data={data} />
          <LoadCard data={data} />
          <LoadCard data={data} />
        </div>
      </main>
    </div>
  );
}

export default Load;
