import React from "react";
import SaveCard from "../Components/saveCard";
import ISave from "../interface/ISave";
import getTime from "../utils/getTime";
import SaveUtils from "../utils/saveUtils";
import { useState } from "react";

interface Props {
  isSave: boolean;
  back?: boolean;
  backClick?: () => void;
}

function LoadOrSave(props: Props) {
  let dataInit: ISave = {
    saveId: 0,
    lineId: 0,
    event: "",
    savePic: "",
    line: "",
    time: getTime(),
  };
  const saveLocal: SaveUtils = new SaveUtils();
  const pageSize: number = 8;
  const isSave: boolean = props.isSave;
  const [saveList, setSaveList] = useState<Array<ISave>>(saveLocal.get());

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
        <div className="load-list"></div>
      </main>
    </div>
  );
}

export default LoadOrSave;
