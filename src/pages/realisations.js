import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Header from "../components/header";
import PropTypes from "prop-types";
import SEO from "../components/seo";
import Gallery from "../components/gallery";

export default function RealisationsPage({ data }) {
  let gallery = {};
  let thumbnails = [];
  data.productDirectories.edges.forEach((edge) => {
    gallery[edge.node.relativePath] = data.imagesForGallery.edges
      .filter(({ node }) => node.relativeDirectory === edge.node.relativePath)
      .map(({ node }, i) => {
        if (i === 0) {
          thumbnails.push(node.childImageSharp);
        }
        return {
          original: node.childImageSharp.full.src,
          thumbnail: node.childImageSharp.thumb.src,
        };
      });
  });
  const [images, setImages] = useState(gallery[Object.keys(gallery)[0]]);

  return (
    <Layout>
      <SEO keywords={["realisations", "modeles"]} title="Realisations" />
      <Header
        title="Réalisations"
        text="Voici quelques-unes de nos plus récentes réalisations"
        fluidBackground={data.headerBackground.childImageSharp.fluid}
      ></Header>

      <section className="bg-gray-200">
        <div className="container mx-auto flex flex-col lg:flex-row p-6 lg:p-12">
          {Object.keys(gallery).map((project) => (
            <div
              key={project}
              className="bg-white group hover:bg-gray-100 cursor-pointer rounded-lg shadow-xl p-4 m-4"
              onClick={() => setImages(gallery[project])}
            >
              <img className="w-full" src={gallery[project][0].thumbnail}></img>

              <div className="py-4">
                <div className="font-bold text-xl text-center">{project}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Gallery images={images} />
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
            thumb: fluid(maxWidth: 300, maxHeight: 200) {
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
