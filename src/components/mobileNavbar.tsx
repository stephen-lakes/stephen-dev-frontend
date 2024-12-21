// import React, { useEffect, useState } from "react";
// import { Link } from "react-router";

// const MobileNavbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [isOpen]);

//   const closeMenu = () => setIsOpen(false);

//   return (
//     <div>
//       <nav className="fixed shadow-md z-10 bg-[#191E24] top-0 left-0 right-0">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <p className="font-cursive text-3xl">{`<Stephen />`}</p>
//             </div>
//             <div className="flex items-center">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {isOpen ? (
//                   <svg
//                     className="h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 ) : (
{
  /* <svg
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
</svg> */
}
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <div
//         className={`fixed inset-0 bg-[#191E24] transition-opacity ${
//           isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <div
//           className={`bg-blue-700 fixed inset-0 z-20 transform ${
//             isOpen ? "translate-y-0" : "-translate-y-full"
//           } transition-transform`}
//         >
//           <div className="h-16 flex items-center px-4">
//             <p className="font-cursive text-3xl">{`<Stephen />`}</p>
//           </div>
//           <div className="px-4 py-8 space-y-8">
//             <Link to="/home">
//               <span className="block">Home</span>
//             </Link>
//             <Link to="/resume">
//               <span className="block">Resume</span>
//             </Link>
//             <Link to="/contact">
//               <span className="block">Contact</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileNavbar;

import React, { useState } from "react";
import { Link } from "react-router";

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="flex items-center justify-between py-3">
        <Link to="/">
          <p className="font-cursive">{`<Stephen />`}</p>
        </Link>

        <button onClick={() => setIsOpen(!isOpen)}>
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
      {isOpen && (
        <div className="flex">
          <ul className="ml-auto">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
