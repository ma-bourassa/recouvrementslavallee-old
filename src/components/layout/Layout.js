import PropTypes from "prop-types";
import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import "../../utils/fontawesome";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <NavBar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
