import React from "react";
import PropTypes from "prop-types";
import BackgroundImage from "gatsby-background-image";

function Header({ title, text, fluidPhoto }) {
  return (
    <BackgroundImage fluid={fluidPhoto}>
      <section className="py-8 md:py-16 text-center text-white">
        <div className="bg-grey py-4 bg-opacity-50">
          <div>
            <h1 className=" font-bold text-2xl md:text-5xl mb-2">{title}</h1>
            <hr className="hr" />
            <p className="leading-loose md:max-w-3xl md:mx-auto mt-2">{text}</p>
          </div>
        </div>
      </section>
    </BackgroundImage>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  fluidPhoto: PropTypes.string,
};
export default Header;
