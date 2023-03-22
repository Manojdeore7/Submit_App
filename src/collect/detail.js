import "./detail.css";
import React from "react";
function ElementUser(props) {
  let str = ` ${props.name} ( max age is ${props.age}  ) `;
  console.log(str);
  return (
    <React.Fragment>
      <div div className="detail">
        <div>{str}</div>
      </div>
    </React.Fragment>
  );
}
export default ElementUser;
