import React from "react";

interface IBottomNavigatorButton {
  title?: string;
}

const BottomNavigatorButton: React.FC<IBottomNavigatorButton> = ({
  title = "Resume",
}) => {
  return (
    <>
      <div className="">
        <button className="btn flex items-center justify-center">
          <span>{title}</span>
          <span className="font-bold text-3xl">&#8594;</span>

          {/* <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/right--v1.png"
          alt="right--v1"
        />{" "} */}
        </button>
      </div>
    </>
  );
};

export default BottomNavigatorButton;
