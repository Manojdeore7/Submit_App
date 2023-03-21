import React, { useState } from "react";
import "./form.css";
function Form(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function nameHandeler(e) {
    setName(e.target.value);
  }
  function ageHandeler(e) {
    setAge(e.target.value);
  }
  function formHandeler(e) {
    e.preventDefault();
    if (name.length == 0 || age.length == 0) {
      alert("Invalid Input");
      return;
    }
    if (Number(age) <= 0) {
      alert("Age must be greater than 0");
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
  );
}

export default Form;
