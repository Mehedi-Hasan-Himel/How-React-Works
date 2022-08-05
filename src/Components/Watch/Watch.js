import React, { useEffect } from "react";
import { useState } from "react";

const Watch = () => {
  const [steps, setSteps] = useState(0);
  const increaseSteps = () => {
    const newStepsCount = steps + 1;
    setSteps(newStepsCount);
  };

  useEffect(() => {
    console.log(steps);
  }, [steps]);

  return (
    <div>
      <h2>This is my Smart Watch</h2>
      <h3>My current steps: {steps}</h3>
      <button onClick={increaseSteps}>Run............</button>
    </div>
  );
};

export default Watch;
