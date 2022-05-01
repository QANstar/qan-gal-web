import React from "react";
interface Props {
  chara: Array<string>;
}
function Chara(props: Props) {
  return (
    <div className="play-chara">
      {props.chara.map((cha, index) => (
        <img key={index} src={require("../assets/img/charaPic/" + cha)} />
      ))}
    </div>
  );
}

export default Chara;
