import React, { useState, useEffect } from "react";
import PlayBg from "../Components/playBg";
import PlayLines from "../Components/playLines";
import PlayChara from "../Components/playChara";
import IPlayLines from "../interface/IPlayLines";
import ILinesItem from "../interface/ILinesItem";
import linesDeal from "../assets/ts/linesDeal";
import axios from "axios";

function Play() {
  const [lineId, setLineId] = useState<number>(0);
  const [lines, setLines] = useState<Array<ILinesItem>>([
    {
      id: 0,
      event: "开始",
      bg: "bg1.png",
      chara: "QANstar",
      charaPic: [],
      lines: "Hello Galgame",
    },
  ]);
  const linesData = () => {
    axios
      .get("./lines/test.txt")
      .then((res) => {
        let str: Array<string> = res.data.split("\r\n");
        let lines: Array<ILinesItem> = linesDeal(str);
        setLines(lines);
      })
      .catch((err) => console.log(err));
  };
  const lineIdAdd = () => {
    if (lineId < lines.length - 1) {
      setLineId(lineId + 1);
    }
  };
  useEffect(() => {
    linesData();
  }, []);
  return (
    <div onClick={lineIdAdd} className="play-content">
      <PlayBg img={lines[lineId].bg} />
      <PlayChara chara={lines[lineId].charaPic} />
      <PlayLines data={lines[lineId]} />
    </div>
  );
}

export default Play;
