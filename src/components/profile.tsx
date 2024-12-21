import React from "react";
import myPic from "../assets/me.jpg";
import { Link } from "react-router";

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-[192px] h-[192px] overflow-hidden rounded-full lg:hidden">
        <img
          src={myPic}
          alt=""
          className="translate-y-[-70px] transfrom scale-150"
        />
      </div>
      <div>
        <p className="lg:text-left mt-2 mb-6 text-[13px] leading-8">
          <span className="mt-2 text-2xl font-[600]">
            Hi,👋🏻 I'm Stephen Oluyomi
          </span>
          <br />
          I’m a software engineer and mathematician with a passion for AI and
          robotics. I excel at solving complex problems and building tech
          solutions. Becoming a better engineer one day at a time, I'm big on
          security 🔒
        </p>
      </div>
      <div className="mt-4 text-center lg:hidden">
        <Link to="/projects">
          <button className="rounded border-gray-950 bg-gray-950 border text-white-500 px-4 py-2  hover:text-white">
            Projects &#8594;
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
