import React, { useEffect } from "react";
import { useState } from "react";
import Display from "../Display/Display";
import Tablet from "../Tablet/Tablet";

const Watch = () => {
  const [steps, setSteps] = useState(0);
  const increaseSteps = () => {
    const newStepsCount = steps + 1;
    setSteps(newStepsCount);
  };

  return (
    <div style={{ border: "2px solid purple", margin: "5px" }}>
      <h2>This is my Smart Watch</h2>
      <h3>My current steps: {steps}</h3>
      <button onClick={increaseSteps}>Run............</button>
      <Display name="Apple Watch" steps={steps}></Display>
      <Tablet></Tablet>
    </div>
  );
};

export default Watch;
