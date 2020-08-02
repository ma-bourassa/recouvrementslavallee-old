import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

function Distributor({ distributor, link }) {
  const query = useStaticQuery(graphql`
    {
      distributors: allFile(filter: { sourceInstanceName: { eq: "distributors" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxHeight: 100) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
      }
    }
  `);

  const logo = query.distributors.edges.find((edge) => edge.node.name === distributor);
  return (
    <div className="w-1/4 lg:w-1/6 self-center ">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Img alt={logo.node.name} fluid={logo.node.childImageSharp.fluid}></Img>
      </a>
    </div>
  );
}
export default Distributor;

Distributor.propTypes = {
  distributor: PropTypes.string,
  link: PropTypes.string,
};
