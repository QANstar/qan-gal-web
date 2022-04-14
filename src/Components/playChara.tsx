import React from "react";
interface Props {
  img: string;
}
function Chara(props: Props) {
  return (
    <div className="play-bg">
      <img src={require("../assets/img/gameBg/" + props.img)} />
    </div>
  );
}

export default Chara;
