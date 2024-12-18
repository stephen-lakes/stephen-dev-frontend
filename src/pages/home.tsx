import React from "react";
import PageMeta from "../components/pageMeta";
import homeFavicon from "../assets/github.svg";
import Resume from "./resume";
import SocialCard from "../components/socialCard";

export const Home: React.FC = () => {
  return (
    <>
      <PageMeta title="Stephen Oluyomi" favicon={homeFavicon} />
      <div className="max-h-screen md:flex lg:px-10">
        <div className="w-2/5 hidden lg:block lg:mt-24">
          <Intro />
          <SocialCard />
        </div>
        <div className="lg:w-3/5 lg:overflow-y-scroll lg:no-scrollbar shadow-2xl">
          <Resume />
        </div>
      </div>
    </>
  );
};

const Intro: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl">Hi,👋🏻 my name is Stephen Oluyomi</h1>
      <p className="mt-2 text-[13px] leading-8">
        I am a <span className="font-bold">software engineer</span> and
        <span className="font-bold">mathematician</span> with a deep fascination
        for <span className="font-bold">AI and robotics</span>. I thrive on
        <span className="font-bold">solving complex problems</span> and love
        building
        <span className="font-bold">solution-driven tech products</span> and
        <span className="font-bold">enterprise applications</span>. I am
        committed to
        <span className="font-bold">becoming a better software engineer</span>
        every day by adhering to
        <span className="font-bold">industry-standard practices</span> and
        focusing on building
        <span className="font-bold">safe and secure software </span>
      </p>
    </div>
  );
};

export default Home;
