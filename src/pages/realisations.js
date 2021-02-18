import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";
import Header from "../components/Header";
import Layout from "../components/layout/Layout";
import SEO from "../components/Seo";

const RealisationsPageTemplate = ({ title, subtitle, realisations }) => {
  return (
    <>
      <SEO keywords={[title]} title={title} description={subtitle} />
      <Header title={title} text={subtitle} />

      <section className="bg-gray-100">
        <div className="container mx-auto flex flex-col lg:flex-row flex-wrap p-12 lg:p-12 justify-center">
          {realisations.map((realisation, i) => (
            <Link
              to={`/realisations/${realisation.projectPath}/`}
              key={i}
              className="bg-white cursor-pointer rounded-lg shadow-xl p-6 m-4 flex-1 flex-grow-0 _card "
            >
              <div className=" text-center">
                <Img className="rounded-lg" fixed={realisation.thumbnail} />
              </div>
              <div className="mt-2">
                <div className="font-semibold text-xl text-center">{realisation.projectName}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {}
    </>
  );
};

RealisationsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  realisations: PropTypes.any,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

const RealisationsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const realisations = data.allMarkdownRemark.nodes.map((node) => {
    return {
      projectPath: node.parent.name,
      projectName: node.frontmatter.title,
      thumbnail: node.frontmatter.images[0].childImageSharp.fixed,
    };
  });

  return (
    <Layout>
      <RealisationsPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        realisations={realisations}
      ></RealisationsPageTemplate>
    </Layout>
  );
};

RealisationsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    allMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default RealisationsPage;

export const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "realisations-page" } }) {
      frontmatter {
        title
        subtitle
      }
    }
    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "realisation" } } }) {
      nodes {
        frontmatter {
          title
          images {
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
