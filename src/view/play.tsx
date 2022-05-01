import React, { useState, useEffect } from "react";
import PlayBg from "../Components/playBg";
import PlayLines from "../Components/playLines";
import PlayChara from "../Components/playChara";
import ILinesItem from "../interface/ILinesItem";
import linesDeal from "../utils/linesDeal";
import LoadOrSave from "./loadOrSave";
import axios from "axios";

function Play() {
  const [lineId, setLineId] = useState<number>(0);
  const [lineVisable, setLineVisable] = useState<boolean>(true);
  const [saveVisable, setSaveVisable] = useState<boolean>(false);
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
  const openSave = () => {
    setLineVisable(false);
    setSaveVisable(true);
  };
  const menuClick = (e: any) => {
    e.stopPropagation();
  };
  const saveBack = () => {
    setLineVisable(true);
    setSaveVisable(false);
  };
  useEffect(() => {
    linesData();
  }, []);
  return (
    <div onClick={lineIdAdd} className="play-content">
      <PlayBg img={lines[lineId].bg} />
      <PlayChara chara={lines[lineId].charaPic} />
      {lineVisable ? (
        <PlayLines openSave={openSave} data={lines[lineId]} />
      ) : null}
      <div onClick={menuClick} className="play-menu">
        {saveVisable ? (
          <LoadOrSave backClick={saveBack} back isSave={true} />
        ) : null}
      </div>
    </div>
  );
}

export default Play;
