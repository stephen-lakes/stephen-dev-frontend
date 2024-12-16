import React, { useEffect, useState } from "react";

const BackToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      onClick={scrollToTop}
      className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-950 fixed bottom-4 right-4 cursor-pointer ${
        showButton ? "block" : "hidden"
      }`}
    >
      <span>&#8593;</span>
    </div>
  );
};

export default BackToTopButton;
