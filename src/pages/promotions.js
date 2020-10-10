import { graphql } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";
import Header from "../components/header";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";

export default function PromotionsPage({ data }) {
  let promotions = [];
  if (data) {
    promotions = data.promotions.nodes.map(({ childMarkdownRemark }) => childMarkdownRemark.frontmatter);
  }
  console.log(promotions);
  return (
    <Layout>
      <SEO keywords={["promotions"]} title="Promotions" />
      <Header title="Promotions" text=""></Header>

      <section className="bg-gray-200">
        <div className="container mx-auto lg:max-w-3xl flex flex-col p-12 lg:p-12">
          {promotions.length > 1 ? (
            promotions.map((promo, i) => {
              <div key={i} href={promotions.url} target="_blank" rel="noopener noreferrer">
                <Img className="w-1/2" fluid={promo.photo.childImageSharp.fluid}></Img>
                <div className="w-1/2">
                  <h3>{promotions.title}</h3>
                  <p>{promotions.description}</p>
                </div>
              </div>;
            })
          ) : (
            <div className="text-center text-xl font-semibold">Aucune promotions pour le moment.</div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    promotions: allFile(filter: { sourceInstanceName: { eq: "promotions" }, extension: { eq: "md" } }) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            title
            description
            url
            photo {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
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
