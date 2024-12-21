import { ReactNode } from "react";
import BackToTopButton from "../components/backToTopButton";
import MobileNavbar from "../components/mobileNavbar";
import PageMeta from "../components/pageMeta";
import MobileFooter from "../components/mobileFooter";

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="font-sans px-3">
        <PageMeta title="Stephen Oluyomi - Software Engineer" favicon="" />
        <header>
          <MobileNavbar />
        </header>
        <main className="">
          {/* Other pages go here */}
          {children}
        </main>
        <BackToTopButton />
        <footer className="lg:hidden">
          <MobileFooter />
        </footer>
      </div>
    </>
  );
};

export default Layout;
