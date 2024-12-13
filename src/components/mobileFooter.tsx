import React from "react";

import githubIcon from "../assets/github.svg";
import linkedIncon from "../assets/linkedin.svg";
import twitterIcon from "../assets/twitter.svg";

const MobileFooter: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-16 bg-gray-950 py-6">
      <a href="https://www.github.com/stephen-lakes">
        <img src={githubIcon} alt="" className="w-8 h-8" />
      </a>
      <a href="">
        <img src={linkedIncon} alt="" className="w-8 h-8" />
      </a>
      <a href="">
        <img src={twitterIcon} alt="" className="w-8 h-8" />
      </a>
    </div>
  );
};

export default MobileFooter;
