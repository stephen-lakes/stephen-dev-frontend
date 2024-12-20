import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
