import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout";
import Home from "./home";
import Resume from "./resume";
import Contact from "./contact";
import NotFound from "./notFound";
import Project from "./project";

const Index: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default Index;
