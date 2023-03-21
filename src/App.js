import React, { useState } from "react";
import "./App.css";
import Form from "./form/form";
import Show from "./collect/show";
function App() {
  const [userData, setUserData] = useState([]);
  function onData(obj) {
    setUserData((prev) => {
      return [obj, ...prev];
    });
  }
  return (
    <div className="App">
      <Form submit={onData}></Form>
      <Show data={userData}></Show>
    </div>
  );
}

export default App;
