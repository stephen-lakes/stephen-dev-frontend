import React, { useState } from "react";
import Home from "./home";
import Resume from "./resume";
import Contact from "./contact";
import Project from "./project";

const Index: React.FC = () => {
  const [page, setPage] = useState(1);

  const renderPage = () => {
    switch (page) {
      case 1:
        return <Home />;
      case 2:
        return <Resume />;
      case 3:
        return <Project />;
      case 4:
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {renderPage()}
      <nav>
        <button onClick={() => setPage(1)}>Home</button>
        <button onClick={() => setPage(2)}>Resume</button>
        <button onClick={() => setPage(3)}>Project</button>
        <button onClick={() => setPage(4)}>Contact</button>
      </nav>
    </div>
  );
};

export default Index;
