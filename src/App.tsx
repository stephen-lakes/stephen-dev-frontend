import "./App.css";

function App() {
  return (
    <>
      <Intro />

      <Nav />
    </>
  );
}

const Intro = () => {
  return (
    <>
      <div>
        Hi my name is
        <p>Stephen Oluyomi</p>
        <p>
          I'm a software engineer, a mathematician fascinated by AI and Robotics
        </p>
      </div>
    </>
  );
};

const Nav: React.FC = () => {
  return (
    <>
      <div>
        <a href="#">
          <img src="home-icon.png" alt="Home Icon" />
          <span>Home</span>
        </a>
        <a href="#">
          <img src="document-icon.png" alt="Document Icon" />
          <span>Resume</span>
        </a>
        <a href="#">
          <img src="folder-icon.png" alt="Folder Icon" />
          <span>Project</span>
        </a>
        <a href="#">
          <img src="contact-icon.png" alt="Contact Icon" />
          <span>Contact</span>
        </a>
      </div>
    </>
  );
};

export default App;
