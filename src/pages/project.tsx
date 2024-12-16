import React from "react";
import PageMeta from "../components/pageMeta";
import homeFavicon from "../assets/github.svg";

const Project: React.FC = () => {
  return (
    <div>
      <PageMeta title="Stephen Oluyomi - Projects" favicon={homeFavicon} />
      Project
    </div>
  );
};

export default Project;
