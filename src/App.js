import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const callApi = () => {
    console.log("api call");
  };

  let timerId = null;
  const throttle = (event) => {
    if (timerId) {
      return;
    }
    timerId = setTimeout(() => {
      console.log("timeout exect");
      callApi();
      clearTimeout(timerId);
      timerId = null;
    }, 1000);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input
        onChange={(e) => {
          throttle(e);
        }}
      />
    </div>
  );
}
