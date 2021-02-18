import Gallery from "@browniebroke/gatsby-image-gallery";
import "@browniebroke/gatsby-image-gallery/dist/style.css";
import { graphql, Link } from "gatsby";
import PropTypes, { any } from "prop-types";
import React from "react";
import Header from "../components/Header";
import Layout from "../components/layout/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import SEO from "../components/Seo";

const RealisationPageTemplate = ({ title, images }) => {
  const lightboxOptions = {
    imageLoadErrorMessage: "Impossible de charger cette image",
    nextLabel: "Image suivante",
    prevLabel: "Image précédente",
    zoomInLabel: "Zoomer",
    zoomOutLabel: "Dézoomer",
    closeLabel: "Fermer",
  };
  return (
    <>
      <SEO
        keywords={[`realisations`]}
        title={title}
        description="Découvrez nos plus récentes réalisations. Les projets suivants vous offre un aperçu de notre expertise et notre savoir-faire. Chaque projet est fait sur mesure et offre un service clé en main."
      />
      <Header title={title} text="" />
      <div className="max-w-screen-lg mx-auto px-4">
        <Link to={`/realisations/`} className="text-lg lg:text-xl font-semibold">
          &#10094; Retour à nos réalisations
        </Link>
      </div>
      <div className="max-w-screen-lg mx-auto p-4">
        <Gallery images={images} imgClass={"img"} gutter={"0.5rem"} lightboxOptions={lightboxOptions} />
      </div>
      {images.map((image, i) => (
        <div key={i}>
          <PreviewCompatibleImage imageInfo={image}></PreviewCompatibleImage>
        </div>
      ))}
    </>
  );
};

RealisationPageTemplate.propTypes = {
  title: PropTypes.string,
  images: PropTypes.arrayOf(any),
};

const RealisationPage = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title;
  const images = data.markdownRemark.frontmatter.images.map((image) => image.childImageSharp);

  return (
    <Layout>
      <RealisationPageTemplate title={title} images={images}></RealisationPageTemplate>
    </Layout>
  );
};

RealisationPage.propTypes = {
  data: PropTypes.any,
};

export default RealisationPage;

export const query = graphql`
  query($projectName: String) {
    markdownRemark(frontmatter: { title: { eq: $projectName } }) {
      frontmatter {
        title
        images {
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
`;
