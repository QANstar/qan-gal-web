import React from "react";
interface Props {
  children?: any;
  width?: string;
}
function card(props: Props) {
  return (
    <div style={{ width: props.width }} className="qan-card">
      <div>{props.children}</div>
    </div>
  );
}

export default card;
