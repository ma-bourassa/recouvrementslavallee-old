import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";
import Header from "../components/header";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";

export default function RealisationsPage({ data }) {
  const projects = data.projects.edges.map(({ node }) => {
    return {
      projectName: node.childMarkdownRemark.frontmatter.title,
      thumbnail: node.childMarkdownRemark.frontmatter.photos[0].childImageSharp.fixed,
    };
  });

  return (
    <Layout>
      <SEO keywords={["realisations", "modeles", "projets"]} title="Realisations" />
      <Header title="Réalisations" text="Voici quelques-unes de nos plus récentes réalisations"></Header>

      <section className="bg-gray-200">
        <div className="container mx-auto flex flex-col lg:flex-row flex-wrap p-12 lg:p-12 justify-center">
          {projects.map((project, i) => (
            <Link
              to={`/realisations/${project.projectName}/`}
              key={i}
              className="bg-white cursor-pointer rounded-lg shadow-xl p-6 m-4 flex-1 flex-grow-0 _card "
            >
              <div className=" text-center">
                <Img className="rounded-lg" fixed={project.thumbnail}></Img>
              </div>
              <div className="mt-2">
                <div className="font-semibold text-xl text-center">{project.projectName}</div>
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
    projects: allFile(filter: { sourceInstanceName: { eq: "realisations" }, extension: { eq: "md" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              photos {
                childImageSharp {
                  fixed(width: 180, height: 180) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
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
