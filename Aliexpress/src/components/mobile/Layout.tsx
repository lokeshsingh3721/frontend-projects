import { ReactNode } from "react";
import MobileNavbar from "./navbar";

interface props {
  children: ReactNode;
}

const Layout = ({ children }: props) => {
  return (
    <div className="p-4 ">
      <MobileNavbar />
      {children}
    </div>
  );
};

export default Layout;
