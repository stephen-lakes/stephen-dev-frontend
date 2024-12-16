import React, { useState } from "react";
import Home from "./home";
import Resume from "./resume";
import Contact from "./contact";
import Project from "./project";
import MobileFooter from "../components/mobileFooter";
import BackToTopButton from "../components/backToTopButton";
import PageMeta from "../components/pageMeta";

const Index: React.FC = () => {
  const [page, setPage] = useState(1);
  const navItems: string[] = ["Home", "Resume", "Projects", "Contact"];

  const renderPage = () => {
    switch (page) {
      case 0:
        return <Home />;
      case 1:
        return <Resume />;
      case 2:
        return <Project />;
      case 3:
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <PageMeta title="Stephen Oluyomi - Software Engineer" favicon="" />
      {renderPage()}

      <nav>
        {navItems.map((navItem, idx) => (
          <button key={idx} onClick={() => setPage(idx)}>
            {navItem}
          </button>
        ))}
      </nav>
      <BackToTopButton />
      <MobileFooter />
    </div>
  );
};

export default Index;
