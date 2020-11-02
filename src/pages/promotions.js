import { graphql } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";
import Header from "../components/header";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";

export default function PromotionsPage({ data }) {
  let promotions = [];
  promotions = data.promotions.nodes
    .filter(({ frontmatter }) => frontmatter.title !== "default")
    .map(({ frontmatter }) => frontmatter);

  return (
    <Layout>
      <SEO keywords={["promotions"]} title="Promotions" />
      <Header title="Promotions" text="" />

      <section className="bg-gray-200">
        <div className="container mx-auto max-w-5xl flex flex-col p-12 mb-6">
          {promotions.map((promo, i) => (
            <div className="flex flex-col lg:flex-row bg-0 p-8 rounded-lg shadow-2xl my-8 bg-white" key={i}>
              <Img className="w-full lg:w-1/2" fluid={promo.photo.childImageSharp.fluid} />
              <div className="w-full lg:w-1/2 pt-4 lg:pt-0 lg:pl-16 flex flex-col space-y-8">
                <h3 className="text-3xl font-bold text-center">{promo.title}</h3>
                <p className="text-lg font-medium text-center">{promo.description}</p>
                <div className="text-center">
                  <a
                    className="border border-grey text-center font-semibold py-2 px-3 rounded hover:bg-grey hover:text-white transition duration-500"
                    href={promo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir cette promotion
                  </a>
                </div>
              </div>
            </div>
          ))}
          {promotions.length === 0 && (
            <div className="text-center text-xl font-semibold">Aucune promotion pour le moment</div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    promotions: allMarkdownRemark(filter: { fields: { sourceName: { eq: "promotions" } } }) {
      nodes {
        frontmatter {
          title
          description
          url
          photo {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_withWebp
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
      }
    }
  }
`;

PromotionsPage.propTypes = {
  data: PropTypes.object,
};
