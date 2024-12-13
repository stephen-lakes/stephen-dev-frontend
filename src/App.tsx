import "./App.css";
function App() {
  return (
    <>
      <Intro />
    </>
  );
}

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
const Nav: React.FC = () => {
  return (
    <>
      <div>
        <a href="#">
          {/* <img src="home-icon.png" alt="Home Icon" /> */}
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/home--v1.png"
            alt="home--v1"
          />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"></path>
          </svg> */}
          <span>Home</span>
        </a>
        <a href="#">
          {/* <img src="document-icon.png" alt="Document Icon" /> */}
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/document.png"
            alt="document"
          />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path>
          </svg> */}
          <span>Resume</span>
        </a>
        <a href="#">
          {/* <img src="folder-icon.png" alt="Folder Icon" /> */}
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/folder-invoices--v1.png"
            alt="folder-invoices--v1"
          />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <path d="M 5 4 C 3.3544268 4 2 5.3555411 2 7 L 2 16 L 2 26 L 2 43 C 2 44.644459 3.3544268 46 5 46 L 45 46 C 46.645063 46 48 44.645063 48 43 L 48 26 L 48 16 L 48 11 C 48 9.3549372 46.645063 8 45 8 L 18 8 C 18.08657 8 17.96899 8.000364 17.724609 7.71875 C 17.480227 7.437136 17.179419 6.9699412 16.865234 6.46875 C 16.55105 5.9675588 16.221777 5.4327899 15.806641 4.9628906 C 15.391504 4.4929914 14.818754 4 14 4 L 5 4 z M 5 6 L 14 6 C 13.93925 6 14.06114 6.00701 14.308594 6.2871094 C 14.556051 6.5672101 14.857231 7.0324412 15.169922 7.53125 C 15.482613 8.0300588 15.806429 8.562864 16.212891 9.03125 C 16.619352 9.499636 17.178927 10 18 10 L 45 10 C 45.562937 10 46 10.437063 46 11 L 46 13.1875 C 45.685108 13.07394 45.351843 13 45 13 L 5 13 C 4.6481575 13 4.3148915 13.07394 4 13.1875 L 4 7 C 4 6.4364589 4.4355732 6 5 6 z M 5 15 L 45 15 C 45.56503 15 46 15.43497 46 16 L 46 26 L 46 43 C 46 43.562937 45.562937 44 45 44 L 5 44 C 4.4355732 44 4 43.563541 4 43 L 4 26 L 4 16 C 4 15.43497 4.4349698 15 5 15 z"></path>
          </svg> */}
          <span>Project</span>
        </a>
        <a href="#">
          {/* <img src="contact-icon.png" alt="Contact Icon" /> */}
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/new-post--v1.png"
            alt="new-post--v1"
          />
          <span>Contact</span>
        </a>
      </div>
    </>
  );
};

export default App;
