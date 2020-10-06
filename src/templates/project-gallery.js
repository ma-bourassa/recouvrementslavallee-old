import Gallery from "@browniebroke/gatsby-image-gallery";
import "@browniebroke/gatsby-image-gallery/dist/style.css";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Header from "../components/header";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";

export default function ProjectGallery({ data, pageContext }) {
  const lightboxOptions = {
    imageLoadErrorMessage: "Impossible de charger cette image",
    nextLabel: "Image suivante",
    prevLabel: "Image précédente",
    zoomInLabel: "Zoomer",
    zoomOutLabel: "Dézoomer",
    closeLabel: "Fermer",
  };

  console.log(pageContext);
  const images = data.imagesForGallery.edges.map(({ node }) => node.childImageSharp);

  return (
    <Layout>
      <SEO keywords={[`realisations`]} title={pageContext.projectName} />
      <Header title={pageContext.projectName} text=""></Header>
      <div className="max-w-screen-lg mx-auto mb-4">
        <Link to={`/realisations/`} className="text-xl font-semibold">
          &lt; Retour à nos réalisations
        </Link>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <Gallery images={images} imgClass={"img"} gutter={"0.5rem"} lightboxOptions={lightboxOptions} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($projectPath: String) {
    imagesForGallery: allFile(filter: { relativePath: { regex: $projectPath } }) {
      edges {
        node {
          relativeDirectory
          childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
            full: fluid(quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

ProjectGallery.propTypes = {
  data: PropTypes.any,
  pageContext: PropTypes.object,
};
