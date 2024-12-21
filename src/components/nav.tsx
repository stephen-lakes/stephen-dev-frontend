import { Link } from "react-router";
import Line from "./line";

const Nav: React.FC = () => {
  return (
    <>
      <nav>
        <Link to="/home">
          <a href="" className="flex items-center gap-4 my-3">
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
        </Link>
        <Link to="/projects">
          <a href="#" className="flex items-center gap-4 my-3">
            {/* <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/folder-invoices--v1.png"
              alt="folder-invoices--v1"
            /> */}
            01
            <Line />
            <span>Project</span>
          </a>
        </Link>
        <Link to="/resume">
          <a href="#" className="flex items-center gap-4 my-3">
            {/* <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/document.png"
              alt="document"
              className=""
            /> */}
            02
            <Line />
            <span>Resume</span>
          </a>
        </Link>
        <Link to="/contact">
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
        </Link>
      </nav>
    </>
  );
};

export default Nav;
