import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import PropTypes from "prop-types";
import React from "react";
import Header from "../components/header";
import Layout from "../components/layout/layout";
import ProductSection from "../components/productSection";
import SEO from "../components/seo";

export default function ProductsPage({ data }) {
  const produits = data.produits.frontmatter.produits;
  return (
    <Layout>
      <SEO
        keywords={["nos produits", `lattes de vinyle`, `tapis`, `bois d'ingénierie`, `prélart`, `laminé`, `linoléum`]}
        title="Nos produits"
        description="Nous offrons un large éventail de recouvrement de sol ainsi que le service d'installation de plancher. Lattes de vinyle, tapis, bois d'ingénierie, prélart, laminé, linoléum, céramique."
      />
      <Header
        title="Nos produits"
        text="Nous offrons un large éventail de recouvrement de sol ainsi que le service d'installation de plancher."
      />
      {produits.map((produit, i) => (
        <ProductSection
          key={i}
          title={produit.title}
          description={produit.description}
          reverseOrder={!!(i % 2)}
          photo={produit.image.childImageSharp.fluid}
          links={produit.links}
        />
      ))}
      <div className="container mx-auto px-6 py-12 lg:py-20 flex flex-row-reverse">
        <AnchorLink
          to="/produits/#head"
          stripHash
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded"
        >
          <FontAwesomeIcon icon="angle-up" color="grey" size="lg" />
        </AnchorLink>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    produits: markdownRemark(fields: { sourceName: { eq: "produits" } }) {
      frontmatter {
        produits {
          title
          description
          links {
            name
            url
          }
          image {
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
`;

ProductsPage.propTypes = {
  data: PropTypes.object,
};
