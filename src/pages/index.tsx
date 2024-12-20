import React, { useState } from "react";
import Home from "./home";
import Contact from "./contact";
import Project from "./project";
import BackToTopButton from "../components/backToTopButton";
import PageMeta from "../components/pageMeta";
import Resume from "./resume";

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

      <Navbar />

      {renderPage()}

      <BackToTopButton />
    </div>
  );
};

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <div className="lg:hidden flex items-center py-6">
//         <p className="font-cursive text-3xl">{`<Stephen />`}</p>
//         <svg
//           onClick={() => setIsOpen(!isOpen)}
//           className="h-8 w-8 ml-auto"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16M4 18h16"
//           ></path>
//         </svg>
//       </div>
//       <div className="navbar-open-container bg-blue-700 text-center h-screen absolute">
//         <ul className=" flex flex-col gap-4">
//           <li>
//             <a href="">Home</a>
//           </li>
//           <li>
//             <a href="">Contact</a>
//           </li>
//           <li>
//             <a href="">Resume</a>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="fixed w-full shadow-md z-10 bg-[#191E24] top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <p className="font-cursive text-3xl">{`<Stephen />`}</p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-0 bg-[#191E24] bg-opacity-75 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-0 z-20 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform`}
        >
          <div className="h-16 flex items-center px-4">
            <p className="font-cursive text-3xl">{`<Stephen />`}</p>
          </div>
          <div className="px-4 py-8 space-y-8">
            <a href="" className="block">
              Home
            </a>
            <a href="" className="block">
              Resume
            </a>
            <a href="\" className="block">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
