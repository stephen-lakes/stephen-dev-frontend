import React, { useState } from "react";
import Home from "./home";
import Contact from "./contact";
import Project from "./project";
import BackToTopButton from "../components/backToTopButton";
import PageMeta from "../components/pageMeta";
import Resume from "./resume";
import MobileNavbar from "../components/mobileNavbar";

const Index: React.FC = () => {
  const [page, setPage] = useState(3);

  const renderPage = () => {
    switch (page) {
      case 0:
        return <Home />;
      case 1:
        return <Project />;
      case 2:
        return <Contact />;
      case 3:
        return <Resume />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="font-sans p-3">
      <PageMeta title="Stephen Oluyomi - Software Engineer" favicon="" />

      <MobileNavbar />

      {renderPage()}

      <BackToTopButton />
    </div>
  );
};

export default Index;
