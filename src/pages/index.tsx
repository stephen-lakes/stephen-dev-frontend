import React, { useState } from "react";
import Home from "./home";
import Resume from "./resume";
import Contact from "./contact";
import Project from "./project";

const Index: React.FC = () => {
  const [page, setPage] = useState(1);
  const navItems: string[] = ["Home", "Resume", "Projects", "Contact"];

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
        {navItems.map((navItem, idx) => (
          <button key={idx} onClick={() => setPage(idx + 1)}>
            {navItem}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Index;
