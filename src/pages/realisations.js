import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";
import Header from "../components/header";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";

export default function RealisationsPage({ data }) {
  let projects = [];
  data.projects.edges.forEach((edge) => {
    data.projectsThumbnail.edges
      .filter(({ node }) => {
        return node.relativeDirectory === edge.node.relativePath;
      })
      .map(({ node }, i) => {
        if (i === 0) {
          projects.push({
            projectName: node.relativeDirectory,
            thumbnail: node.childImageSharp.thumbnail,
          });
        }
        return node.childImageSharp;
      });
  });

  return (
    <Layout>
      <SEO keywords={["realisations", "modeles"]} title="Realisations" />
      <Header title="Réalisations" text="Voici quelques-unes de nos plus récentes réalisations"></Header>

      <section className="bg-gray-200">
        <div className="container mx-auto flex flex-col lg:flex-row lg:p-12">
          {projects.map((project) => (
            <Link
              to={`/${project.projectName}/`}
              key={project.thumbnail}
              className="bg-white group hover:bg-gray-100 cursor-pointer rounded-lg shadow-xl p-4 mx-2 my-4 flex-1"
            >
              <div className="hidden lg:block w-full mx-auto">
                <Img fixed={project.thumbnail}></Img>
              </div>
              <div className="py-4">
                <div className="font-bold text-xl text-center">{project.projectName}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    projects: allDirectory(filter: { sourceInstanceName: { eq: "realisations" }, relativePath: { ne: "" } }) {
      edges {
        node {
          relativePath
        }
      }
    }

    projectsThumbnail: allFile(filter: { sourceInstanceName: { eq: "realisations" } }) {
      edges {
        node {
          relativeDirectory
          childImageSharp {
            thumbnail: fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
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
