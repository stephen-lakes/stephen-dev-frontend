import React from "react";
import PageMeta from "../components/pageMeta";
import homeFavicon from "../assets/github.svg";
import Resume from "./resume";
import myPic from "../assets/me.jpg";
import MobileFooter from "../components/mobileFooter";

export const Home: React.FC = () => {
  return (
    <>
      <PageMeta title="Stephen Oluyomi" favicon={homeFavicon} />
      <div className="px-4 max-h-screen md:flex lg:px-10">
        <div className="lg:w-2/5 lg:block lg:mt-24">
          <Profile />
          <MobileFooter />
        </div>
        <div className="hidden lg:w-3/5 lg:overflow-y-scroll lg:no-scrollbar shadow-2xl">
          <Resume />
        </div>
      </div>
    </>
  );
};

const Bio = () => {
  return (
    <>
      <h1 className="mt-2 text-2xl font-[600]">Hi,👋🏻 I'm Stephen Oluyomi</h1>
      <p className="mt-2 text-[13px] leading-8">
        I am a <span className="font-bold">software engineer</span>,
        <span className="font-bold"> mathematician</span> with a deep
        fascination for <span className="font-bold">AI and robotics</span>. I
        thrive on
        <span className="font-bold"> solving complex problems</span> and love
        building solution-driven tech products and
        <span className="font-bold"> enterprise applications</span>. I am
        committed to
        <span className="font-bold"> becoming a better software engineer </span>
        every day by adhering to industry-standard practices and focusing on
        building
        <span className="font-bold"> safe </span> and
        <span className="font-bold"> secure</span> software
      </p>
    </>
  );
};
const ProfilePicture = () => {
  return (
    <>
      <div className="w-[192px] h-[192px] overflow-hidden rounded-full">
        <img
          src={myPic}
          alt=""
          className="translate-y-[-70px] transfrom scale-150"
        />
      </div>
    </>
  );
};

export const Profile = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <ProfilePicture />
      <Bio />
      {/* CTA */}
      <div className="mt-8 btn text-center border-gray-700 hover:bg-gray-950 px-8">
        Explore &#8594;
      </div>
    </div>
  );
};

export default Home;
