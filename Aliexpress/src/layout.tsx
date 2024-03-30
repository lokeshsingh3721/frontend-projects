import React, { ReactNode } from "react";
import Navbar from "./components/mobile/navbar";

interface props {
  children: ReactNode;
}

const Layout = ({ children }: props) => {
  return (
    <div className="p-4 ">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
