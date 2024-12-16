import React from "react";

import "../animatedLine.css";

const AnimatedMultiLine: React.FC = () => {
  return (
    <div className="w-96 h-0.5 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-0 left-0 w-full h-full bg-green-500 "></div>
    </div>
  );
};

export default AnimatedMultiLine;
