import { ReactNode } from "react";
import MobileNavbar from "../components/mobileNavbar";
import MobileFooter from "../components/mobileFooter";
import Nav from "../components/nav";
import SocialCard from "../components/socialCard";
import Profile from "../components/profile";

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="lg:hidden p-4">
        <MobileNavbar />
      </header>

      <div className="text-white flex flex-grow lg:h-screen lg:overflow-y-hidden">
        <aside className="hidden lg:w-1/2 p-4 lg:flex lg:flex-col lg:justify-evenly">
          <Profile />
          <Nav />
          <SocialCard />
        </aside>

        <main className="w-full lg:w-1/2 p-4 flex items-center justify-center lg:overflow-y-scroll">
          {children}
        </main>
      </div>

      <footer className="lg:hidden p-4 mt-auto">
        <MobileFooter />
      </footer>
    </div>
  );
};

export default Layout;
