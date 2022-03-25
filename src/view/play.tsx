import React from "react";
import PlayBg from "../Components/playBg";
import PlayLines from "../Components/playLines";
import IPlayLines from "../interface/IPlayLines";

function Play() {
  let data: IPlayLines = {
    charaName: "QANstar",
    lines: "Hello Galgame",
  };
  return (
    <div className="play-content">
      <PlayBg img="bg1.png" />
      <PlayLines data={data} />
    </div>
  );
}

export default Play;
