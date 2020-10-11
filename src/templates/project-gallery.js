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

  const images = data.images.childMarkdownRemark.frontmatter.photos.map((photo) => photo.childImageSharp);

  return (
    <Layout>
      <SEO keywords={[`realisations`]} title={pageContext.projectName} />
      <Header title={pageContext.projectName} text=""></Header>
      <div className="max-w-screen-lg mx-auto px-4">
        <Link to={`/realisations/`} className="text-lg lg:text-xl font-semibold">
          &lt; Retour à nos réalisations
        </Link>
      </div>
      <div className="max-w-screen-lg mx-auto p-4">
        <Gallery images={images} imgClass={"img"} gutter={"0.5rem"} lightboxOptions={lightboxOptions} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($projectPath: String) {
    images: file(sourceInstanceName: { eq: "realisations" }, name: { eq: $projectPath }, extension: { eq: "md" }) {
      childMarkdownRemark {
        frontmatter {
          photos {
            childImageSharp {
              thumb: fluid(maxWidth: 270, maxHeight: 270) {
                ...GatsbyImageSharpFluid_withWebp
              }
              full: fluid(quality: 90, maxWidth: 1024) {
                ...GatsbyImageSharpFluid_withWebp
              }
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
