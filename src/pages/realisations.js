import { graphql } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Gallery from "../components/gallery";
import Header from "../components/header";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import useDeviceDetect from "../utils/useDeviceDetect";

export default function RealisationsPage({ data }) {
  let gallery = {};
  let thumbnails = [];
  data.productDirectories.edges.forEach((edge) => {
    gallery[edge.node.relativePath] = data.imagesForGallery.edges
      .filter(({ node }) => node.relativeDirectory === edge.node.relativePath)
      .map(({ node }, i) => {
        if (i === 0) {
          thumbnails.push(node.childImageSharp.thumbnail);
        }
        console.log(node.childImageSharp);
        return {
          original: node.childImageSharp.full.src,
          thumbnail: node.childImageSharp.thumbnail.src,
        };
      });
  });
  const [images, setImages] = useState(gallery[Object.keys(gallery)[0]]);
  const [activeGallery, setActiveGallery] = useState("");
  const { isMobile } = useDeviceDetect();

  console.log(thumbnails);
  return (
    <Layout>
      <SEO keywords={["realisations", "modeles"]} title="Realisations" />
      <Header
        title="Réalisations"
        text="Voici quelques-unes de nos plus récentes réalisations"
        fluidBackground={data.headerBackground.childImageSharp.fluid}
      ></Header>

      <section className="bg-gray-200">
        <div className="container mx-auto flex flex-col lg:flex-row   p-6 lg:p-12">
          {Object.keys(gallery).map((project, i) => (
            <>
              <div
                key={project}
                className="bg-white group hover:bg-gray-100 cursor-pointer rounded-lg shadow-xl p-4 mx-4 my-4 flex-1"
                onClick={() => {
                  setImages(gallery[project]);
                  setActiveGallery(project);
                }}
              >
                <Img className="w-full mx-auto" fluid={thumbnails[i]}></Img>

                <div className="py-4">
                  <div className="font-bold text-xl text-center">{project}</div>
                </div>
              </div>
              <div className="mx-2 my-4 ">{isMobile && activeGallery === project && <Gallery images={images} />}</div>
            </>
          ))}
        </div>
      </section>
      <div className="min-h-1/2 max-w-screen-md mx-auto lg:my-10">{!isMobile && <Gallery images={images} />}</div>
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
            thumbnail: fluid {
              ...GatsbyImageSharpFluid
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
