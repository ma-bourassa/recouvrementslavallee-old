import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Header from "../components/header";
import PropTypes from "prop-types";
import SEO from "../components/seo";
import Gallery from "../components/gallery";

export default function RealisationsPage({ data }) {
  const images = data.imagesForGallery.edges
    .filter(({ node }) => node.relativeDirectory === "product1")
    .map(({ node }) => {
      return {
        original: node.childImageSharp.full.src,
        thumbnail: node.childImageSharp.thumb.src,
      };
    });

  return (
    <Layout>
      <SEO keywords={["realisations", "modeles"]} title="Realisations" />
      <Header
        title="Réalisations"
        text="Voici quelques-unes de nos plus récentes réalisations"
        fluidBackground={data.headerBackground.childImageSharp.fluid}
      ></Header>
      <div className="max-w-screen-lg mx-auto">
        <Gallery images={images} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    productDirectories: allDirectory(filter: { sourceInstanceName: { eq: "realisations" }, relativePath: { ne: "" } }) {
      edges {
        node {
          relativePath
        }
      }
    }
    headerBackground: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "floor4.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imagesForGallery: allFile(filter: { sourceInstanceName: { eq: "realisations" } }) {
      edges {
        node {
          relativeDirectory
          childImageSharp {
            thumb: fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
            full: fluid(quality: 100, maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

RealisationsPage.propTypes = {
  data: PropTypes.object,
};
