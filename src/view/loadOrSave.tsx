import React from "react";
import SaveCard from "../Components/saveCard";
import ISave from "../interface/ISave";
import getTime from "../utils/getTime";
import SaveUtils from "../utils/saveUtils";
import { useState, useEffect } from "react";
import ILinesItem from "../interface/ILinesItem";

interface Props {
  isSave: boolean;
  back?: boolean;
  backClick?: () => void;
  line?: ILinesItem;
}

function LoadOrSave(props: Props) {
  const saveLocal: SaveUtils = new SaveUtils();
  const pageSize: number = 8;
  const isSave: boolean = props.isSave;
  const [saveList, setSaveList] = useState<Array<ISave>>(saveLocal.get());
  const [showData, setShowData] = useState<any[]>([]);

  useEffect(() => {
    showList();
  });

  let saveOnclick = (saveId: number) => {
    if (props.line) {
      let data: ISave = {
        saveId: saveId,
        lineId: props.line.id,
        event: props.line.event,
        savePic: props.line.bg,
        line: props.line.lines,
        time: getTime(),
      };
      saveLocal.save(data);
      setSaveList(saveLocal.get());
    }
  };

  let showList = () => {
    let res = [];
    for (let i = 0; i < pageSize; i++) {
      let item = saveList.find((x) => x.saveId == i);
      if (item != undefined) {
        res.push(<SaveCard key={i} data={item} />);
      } else {
        res.push(
          <div
            onClick={() => saveOnclick(i)}
            key={i}
            className="load-card"
          ></div>
        );
      }
    }
    setShowData(res);
  };

  return (
    <div className="load-content show-toright">
      <header>
        {props.back ? (
          <div onClick={props.backClick} className="save-back">
            返回
          </div>
        ) : null}
        <div className="title">{isSave ? "存档" : "读档"}</div>
        <div className="title-child">{isSave ? "Save" : "Load"}</div>
      </header>
      <main className="load-main">
        <div className="load-list">{showData}</div>
      </main>
    </div>
  );
}

export default LoadOrSave;
