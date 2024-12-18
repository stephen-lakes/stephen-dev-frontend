import React from "react";
import myPic from "../assets/me.jpg";
import githubIcon from "../assets/github.svg";
import linkedInIcon from "../assets/linkedin.svg";
import twitterIcon from "../assets/twitter.svg";

const SocialCard: React.FC = () => {
  return (
    <div className="flex items-center gap-4 flex-wrap absolute bottom-10 p-4 rounded shadow-2xl shadow-[#030712] w-4/12">
      <div className="avatar card shadow-md">
        <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
          <img src={myPic} alt="" />
        </div>
      </div>
      <div className="flex gap-4">
        <a
          href="https://github.com/stephen-lakes"
          className="flex items-center"
        >
          <div className="w-6">
            <img src={githubIcon} alt="" />
          </div>
          <span className="pl-1">Github</span>
          <span>&#8599;</span>
        </a>
        <a
          href="https://www.linkedin.com/in/stephenoluyomi/"
          className="flex items-center"
        >
          <div className="w-6">
            <img src={linkedInIcon} alt="" />
          </div>
          <span className="pl-1">LinkedIn</span>
          <span>&#8599;</span>
        </a>
        <a href="https://x.com/StephenOluyomi" className="flex items-center">
          <div className="w-6">
            <img src={twitterIcon} alt="" />
          </div>
          <span className="pl-1">Twitter</span>
          <span>&#8599;</span>
        </a>
      </div>
    </div>
  );
};

export default SocialCard;
