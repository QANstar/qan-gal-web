import React from "react";
import ISave from "../interface/ISave";
interface Props {
  data: ISave;
}
function SaveCard(props: Props) {
  return (
    <div className="load-card">
      <div className="load-header">
        <div>No.{props.data.saveId}</div>
        <div>{props.data.event}</div>
      </div>
      <div className="load-img">
        <img src={require("../assets/img/gameBg/" + props.data.savePic)} />
      </div>
      <div className="load-lines">{props.data.line}</div>
      <div className="load-time">{props.data.time}</div>
    </div>
  );
}

export default SaveCard;
