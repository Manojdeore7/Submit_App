import "./err.css";
import React from "react";
import ReactDOM from "react-dom";
function Err(props) {
  return ReactDOM.createPortal(
    <div className="err">
      <div>{props.title}</div>
      <p>{props.message}</p>
      <button onClick={props.onConfirm}>Ok</button>
    </div>,
    document.getElementById("new-root")
  );
}
export default Err;
