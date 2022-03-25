import React from "react";
import IloadCard from "../interface/IloadCard";
interface Props {
  data: IloadCard;
}
function LoadCard(props: Props) {
  return (
    <div className="load-card">
      <div className="load-header">
        <div>No.{props.data.id}</div>
        <div>{props.data.event}</div>
      </div>
      <div className="load-img">
        <img src={require("../assets/img/gameBg/" + props.data.img)} />
      </div>
      <div className="load-lines">{props.data.lines}</div>
    </div>
  );
}

export default LoadCard;
