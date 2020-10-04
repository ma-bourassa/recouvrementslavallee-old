import React from "react";
import PropTypes from "prop-types";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";

export default function Header({ title, text, children }) {
  const data = useStaticQuery(graphql`
    query {
      background: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "header.webp" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage fluid={data.background.childImageSharp.fluid}>
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
    </BackgroundImage>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.any,
};
