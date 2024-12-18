import React, { useState } from "react";
import Home from "./home";
import Contact from "./contact";
import Project from "./project";
import BackToTopButton from "../components/backToTopButton";
import PageMeta from "../components/pageMeta";

const Index: React.FC = () => {
  const [page, setPage] = useState(0);

  const renderPage = () => {
    switch (page) {
      case 0:
        return <Home />;
      case 1:
        return <Project />;
      case 2:
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="font-sans p-3">
      <PageMeta title="Stephen Oluyomi - Software Engineer" favicon="" />

      <Navbar />

      {renderPage()}

      <BackToTopButton />
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden flex items-center py-6">
        <p className="font-cursive text-3xl">{`<Stephen />`}</p>
        <svg
          className="h-8 w-8 ml-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Index;
