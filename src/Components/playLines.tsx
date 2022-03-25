import React from "react";
import IPlayLines from "../interface/IPlayLines";
import { Link } from "react-router-dom";
interface Props {
  data: IPlayLines;
}
function PlayBg(props: Props) {
  return (
    <div className="play-lines">
      <div className="play-lines-name">{props.data.charaName}：</div>
      <div className="play-lines-text">{props.data.lines}</div>
      <div className="play-tool">
        <ul>
          <li>
            <Link to="/">Title</Link>
          </li>
          <li>Auto</li>
          <li>Skip</li>
          <li>Back</li>
          <li>Next</li>
          <li>Save</li>
          <li>Load</li>
          <li>Config</li>
        </ul>
      </div>
    </div>
  );
}

export default PlayBg;
