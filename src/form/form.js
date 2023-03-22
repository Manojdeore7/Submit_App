import React, { useState } from "react";
import "./form.css";
import Err from "./err";
function Form(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [err, setErr] = useState(false);
  const [mesage, setMessage] = useState("");
  function nameHandeler(e) {
    setName(e.target.value);
  }
  function ageHandeler(e) {
    setAge(e.target.value);
  }
  function errHandler(e) {
    setErr(false);
  }
  function formHandeler(e) {
    e.preventDefault();
    if (name.length == 0 || age.length == 0) {
      setMessage("Invalid input");
      setErr(true);
      return;
    }
    if (Number(age) <= 0) {
      setMessage("Age must be greater than 0");
      setErr(true);
      return;
    }
    let obj = {
      Name: name,
      Age: age,
    };
    props.submit(obj);
    setName("");
    setAge("");
  }
  return (
    <>
      {err && (
        <>
          <Err title="Not Valid" message={mesage} onConfirm={errHandler}></Err>
        </>
      )}
      <form onSubmit={formHandeler} className="form">
        <div>
          <label>Username</label>
          <input type="text" onChange={nameHandeler} value={name}></input>
        </div>
        <div>
          <label>Age</label>
          <input type="number" onChange={ageHandeler} value={age}></input>
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </>
  );
}

export default Form;
