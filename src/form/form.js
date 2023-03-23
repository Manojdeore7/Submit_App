import React, { useState, useRef } from "react";
import "./form.css";
import Err from "./err";
function Form(props) {
  let nameR = useRef();
  let ageR = useRef();

  const [err, setErr] = useState(false);
  const [mesage, setMessage] = useState("");

  function errHandler(e) {
    setErr(false);
  }
  function formHandeler(e) {
    e.preventDefault();
    if (nameR.current.value.length == 0 || ageR.current.value.length == 0) {
      setMessage("Invalid input");

      setErr(true);
      return;
    }
    if (Number(ageR.current.value) <= 0) {
      setMessage("Age must be greater than 0");

      setErr(true);
      return;
    }
    let obj = {
      Name: nameR.current.value,
      Age: ageR.current.value,
    };
    props.submit(obj);
    nameR.current.value = "";
    ageR.current.value = "";
  }

  return (
    <>
      {err && (
        <>
          <Err title="Not Valid" message={mesage} onConfirm={errHandler}></Err>
        </>
      )}
      <form
        onSubmit={formHandeler}
        className="form"
        style={{
          pointerEvents: err ? "none" : "auto",
          opacity: err ? "0.5" : "1",
        }}
      >
        <div>
          <label>Username</label>
          <input type="text" ref={nameR}></input>
        </div>
        <div>
          <label>Age</label>
          <input type="number" ref={ageR}></input>
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </>
  );
}

export default Form;
