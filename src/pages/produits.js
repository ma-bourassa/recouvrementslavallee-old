import { graphql } from "gatsby";
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
      <SEO keywords={[`service`, `vente`, `produits`, `bois`, `prelart`, `linoleum`, `lamine`]} title="Produits" />
      <Header
        title="Produits"
        text="Nous offrons un large éventail de produits ainsi que le service d'installation de plancher."
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
