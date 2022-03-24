import React from "react";
import { Link } from "react-router-dom";
function leftNav() {
  return (
    <div className="leftNav">
      <ul>
        <li>
          <Link to="/">
            <div>继续</div>
            <div className="nav-title-en">Continue</div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div>开始游戏</div>
            <div className="nav-title-en">Start</div>
          </Link>
        </li>
        <li>
          <Link to="/load">
            <div>读取存档</div>
            <div className="nav-title-en">Load</div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div>系统设置</div>
            <div className="nav-title-en">Config</div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div>鉴赏</div>
            <div className="nav-title-en">Extra</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default leftNav;
