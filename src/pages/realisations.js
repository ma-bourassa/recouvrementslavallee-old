import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";
import Header from "../components/header";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";

export default function RealisationsPage({ data }) {
  const projects = data.projects.nodes.map((node) => {
    return {
      projectPath: node.parent.name,
      projectName: node.frontmatter.title,
      thumbnail: node.frontmatter.photos[0].childImageSharp.fixed,
    };
  });

  return (
    <Layout>
      <SEO
        keywords={["nos réalisations"]}
        title="Nos réalisations"
        description="Découvrez nos plus récentes réalisations. Les projets suivants vous offre un aperçu de notre expertise et notre savoir-faire. Chaque projet est fait sur mesure et offre un service clé en main."
      />
      <Header
        title="Nos réalisations"
        text="Les projets suivants vous offre un aperçu de notre expertise et notre savoir-faire."
      />

      <section className="bg-gray-100">
        <div className="container mx-auto flex flex-col lg:flex-row flex-wrap p-12 lg:p-12 justify-center">
          {projects.map((project, i) => (
            <Link
              to={`/realisations/${project.projectPath}/`}
              key={i}
              className="bg-white cursor-pointer rounded-lg shadow-xl p-6 m-4 flex-1 flex-grow-0 _card "
            >
              <div className=" text-center">
                <Img className="rounded-lg" fixed={project.thumbnail} />
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
    projects: allMarkdownRemark(filter: { fields: { sourceName: { eq: "realisations" } } }) {
      nodes {
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
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
`;

RealisationsPage.propTypes = {
  data: PropTypes.object,
};
