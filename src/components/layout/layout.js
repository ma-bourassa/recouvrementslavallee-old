import PropTypes from "prop-types";
import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import "../../utils/fontawesome";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <NavBar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
