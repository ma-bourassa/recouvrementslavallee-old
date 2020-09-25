import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Header from "../components/header";
import PropTypes from "prop-types";
import SEO from "../components/seo";
import Gallery from "@browniebroke/gatsby-image-gallery";
import "@browniebroke/gatsby-image-gallery/dist/style.css";

export default function RealisationsPage({ data }) {
  const images = data.imagesForGallery.edges.map(({ node }) => node.childImageSharp);
  const lightboxOptions = {
    imageLoadErrorMessage: "Impossible de charger cette image",
    nextLabel: "Image suivante",
    prevLabel: "Image précédente",
    zoomInLabel: "Zoomer",
    zoomOutLabel: "Dézoomer",
    closeLabel: "Fermer",
  };

  return (
    <Layout>
      <SEO keywords={["realisations", "modeles"]} title="Realisations" />
      <Header
        title="Réalisations"
        text="Voici quelques-unes de nos plus récentes réalisations"
        fluidBackground={data.headerBackground.childImageSharp.fluid}
      ></Header>
      <div className="max-w-screen-lg mx-auto">
        <Gallery images={images} imgClass={"img"} gutter={"0.5rem"} lightboxOptions={lightboxOptions} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    imagesForGallery: allFile(filter: { sourceInstanceName: { eq: "realisations" } }) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 250, maxHeight: 250) {
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
    headerBackground: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "floor4.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

RealisationsPage.propTypes = {
  data: PropTypes.object,
};
