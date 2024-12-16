import React from "react";
import Nav from "../components/nav";
import Steps from "../components/steps";

export const Home: React.FC = () => {
  return (
    <>
      <Intro />
      <Nav />
      <Steps />
    </>
  );
};

const Intro: React.FC = () => {
  return (
    <div className="p-4">
      {" "}
      <h1 className="text-4xl">Hi,👋🏻 my name is Stephen Oluyomi</h1>{" "}
      <p className="mt-2 text-[13px] leading-8">
        {" "}
        I am a <span className="font-bold">software engineer</span> and{" "}
        <span className="font-bold">mathematician</span> with a deep fascination
        for <span className="font-bold">AI and robotics</span>. I thrive on{" "}
        <span className="font-bold">solving complex problems</span> and love
        building{" "}
        <span className="font-bold">solution-driven tech products</span> and
        <span className="font-bold">enterprise applications</span>. I am
        committed to{" "}
        <span className="font-bold">becoming a better software engineer</span>{" "}
        every day by adhering to{" "}
        <span className="font-bold">industry-standard practices</span> and
        focusing on building{" "}
        <span className="font-bold">safe and secure software </span>
      </p>{" "}
    </div>
  );
};

export default Home;
