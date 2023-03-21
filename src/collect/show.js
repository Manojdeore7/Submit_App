import React, { useState } from "react";
import ElementUser from "./detail";
import "./show.css";
function Show(props) {
  let i = 0;
  return (
    <div className="show">
      {props.data.map((user) => {
        return <ElementUser key={i++} name={user.Name} age={user.Age} />;
      })}
    </div>
  );
}

export default Show;
