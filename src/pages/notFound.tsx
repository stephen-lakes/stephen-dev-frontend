import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="h-svh w-svw flex flex-col items-center justify-center gap-4">
      <h1 className="">Something went wrong😞</h1>
      <img
        className="w-20 h-20"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhtZh1ps1Ma66Ok1sGAAg_1GkC63OojT_ezA&s"
        alt=""
      />
      <a href="">&#8592; Back to home page</a>
    </div>
  );
};

export default NotFound;
