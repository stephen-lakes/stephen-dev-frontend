import { ReactNode } from "react";
import BackToTopButton from "../components/backToTopButton";
import MobileNavbar from "../components/mobileNavbar";
import PageMeta from "../components/pageMeta";

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="font-sans p-3">
        <PageMeta title="Stephen Oluyomi - Software Engineer" favicon="" />
        <MobileNavbar />
        <main>
          {/* Other pages go here */}
          {children}
        </main>
        <BackToTopButton />
      </div>
    </>
  );
};

export default Layout;
