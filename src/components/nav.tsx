import Line from "./line";

const Nav: React.FC = () => {
  return (
    <>
      <div className="p-4">
        <a href="#" className="flex items-center gap-4 my-3">
          {/* <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/home--v1.png"
              alt="home--v1"
            /> */}
          00
          <Line />
          <span>Home</span>
        </a>
        <a href="#" className="flex items-center gap-4 my-3">
          {/* <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/document.png"
              alt="document"
              className=""
            /> */}
          01
          <Line />
          <span>Resume</span>
        </a>
        <a href="#" className="flex items-center gap-4 my-3">
          {/* <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/folder-invoices--v1.png"
              alt="folder-invoices--v1"
            /> */}
          02
          <Line />
          <span>Project</span>
        </a>
        <a href="#" className="flex items-center gap-4 my-3">
          {/* <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/new-post--v1.png"
              alt="new-post--v1"
            /> */}
          03
          <Line />
          <span>Contact</span>
        </a>
      </div>
    </>
  );
};

export default Nav;
