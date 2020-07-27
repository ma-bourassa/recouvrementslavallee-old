import React from "react";
import PropTypes from "prop-types";
import BackgroundImage from "gatsby-background-image";

function Header({ title, text, fluidBackground }) {
  return (
    <BackgroundImage fluid={fluidBackground}>
      <section className="py-8 mb-6 lg:mb-10 lg:py-16 text-center text-white">
        <div className="bg-grey py-4 bg-opacity-50">
          <div>
            <h1 className=" font-bold text-2xl lg:text-5xl mb-2">{title}</h1>
            <hr className="hr" />
            <p className="leading-loose lg:text-xl lg:max-w-4xl lg:mx-auto mt-2">{text}</p>
          </div>
        </div>
      </section>
    </BackgroundImage>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  fluidBackground: PropTypes.object,
};
export default Header;
