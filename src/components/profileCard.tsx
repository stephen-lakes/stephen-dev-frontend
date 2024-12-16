import React from "react";

const ProfileCard: React.FC = () => {
  return (
    <>
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div>Stephen Oluyomi</div>
      <div>SOFTWARE ENGINEER</div>
      
    </>
  );
};

export default ProfileCard;
