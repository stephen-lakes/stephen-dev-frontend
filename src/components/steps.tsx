import React from "react";

const Steps: React.FC = () => {
  return (
    <div>
      <ul className="steps steps-vertical">
        <li className="step step-primary">
          <a href="#">Home</a>
        </li>
        <li className="step">
          <a href="#">Resume</a>
        </li>
        <li className="step">
          <a href="#">Project</a>
        </li>
        <li className="step">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Steps;
