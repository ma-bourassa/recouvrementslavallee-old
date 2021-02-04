import Gallery from "@browniebroke/gatsby-image-gallery";
import "@browniebroke/gatsby-image-gallery/dist/style.css";
import { graphql, Link } from "gatsby";
import PropTypes, { any } from "prop-types";
import React from "react";
import Header from "../components/header";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";

export default function ProjectGallery({ data }) {
  const title = data.gallery.frontmatter.title;
  const images = data.gallery.frontmatter.photos.map((photo) => photo.childImageSharp);

  return (
    <Layout>
      <ProjectGalleryTemplate title={title} images={images}></ProjectGalleryTemplate>
    </Layout>
  );
}

ProjectGallery.propTypes = {
  data: PropTypes.any,
};

export function ProjectGalleryTemplate({ title, images }) {
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
          &lt; Retour à nos réalisations
        </Link>
      </div>
      <div className="max-w-screen-lg mx-auto p-4">
        <Gallery images={images} imgClass={"img"} gutter={"0.5rem"} lightboxOptions={lightboxOptions} />
      </div>
    </>
  );
}

ProjectGalleryTemplate.propTypes = {
  title: PropTypes.string,
  images: PropTypes.arrayOf(any),
};

export const query = graphql`
  query($projectName: String) {
    gallery: markdownRemark(frontmatter: { title: { eq: $projectName } }) {
      frontmatter {
        title
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
`;
