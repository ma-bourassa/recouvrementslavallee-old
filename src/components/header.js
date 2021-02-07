import React from "react";
import PropTypes from "prop-types";
import headerImage from "../images/header.jpg";

const Header = ({ title, text, children }) => {
  return (
    <div
      className="bg-center bg-ima"
      style={{
        backgroundImage: `url(${headerImage})`,
      }}
    >
      <section className="py-8 mb-6 lg:mb-10 lg:py-16 text-center text-white">
        <div className="bg-grey-dark py-4 bg-opacity-75">
          <div>
            <h1 className=" font-bold text-2xl lg:text-5xl mb-2">{title}</h1>
            <hr className="hr" />
            <p className="leading-loose lg:text-xl lg:max-w-4xl lg:mx-auto m-2">{text}</p>
            {children}
          </div>
        </div>
      </section>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.any,
};

export default Header;
